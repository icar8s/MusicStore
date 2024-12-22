using Application.Common;
using Application.DTOs.MusicStore;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services.MusicStore;
using Azure.Storage.Blobs;
using Domain.Entities.General;
using Domain.Entities.MusicStore;
using Domain.Enums;
using Domain.Options;
using Mapster;
using MapsterMapper;
using Microsoft.Extensions.Options;
using Shared;
using Shared.Interfaces;

namespace Infrastructure.Services.MusicStore;

public class MusicProductService(
    BlobServiceClient blobServiceClient,
    IRepository<MusicProduct> genericMusicRepository,
    IOptions<BlobOptions> blobOptions,
    IMapper mapper
    ): IMusicProductService
{
    public async Task<IResult<MusicProductDetailDto>> GetMusicProductAsync(Guid id,
        CancellationToken cancellationToken = default)
    {
        var product = await genericMusicRepository.GetByIdAsync(id, cancellationToken);

        if (product == null)
        {
            return Result<MusicProductDetailDto>.Failure();
        }

        return Result<MusicProductDetailDto>.Success(mapper.Map<MusicProductDetailDto>(product));
    }

    public async Task<IPaginatedResult<MusicProductShortDto>> GetMusicProductsAsync(PageIndex page,
        CancellationToken cancellationToken = default)
        => await genericMusicRepository
            .Entities
            .ProjectToType<MusicProductShortDto>(mapper.Config)
            .ToPaginatedListAsync(page.PageNumber, page.PageSize, cancellationToken);

    public async Task<IPaginatedResult<MusicProductShortDto>> GetMusicProductsByTypeAsync(PageIndex page,
        MusicProductType musicProductType,
        CancellationToken cancellationToken = default)
        => await genericMusicRepository
            .Entities
            .Where(x=>x.Type == musicProductType)
            .ProjectToType<MusicProductShortDto>(mapper.Config)
            .ToPaginatedListAsync(page.PageNumber, page.PageSize, cancellationToken);

    public async Task<IResult<Guid>> AddMusicProductAsync(MusicProductDto musicProduct,
        CancellationToken cancellationToken = default)
    {
        if(blobServiceClient.GetBlobContainerClient(blobOptions.Value.ContainerName) == null)
        {
            await blobServiceClient.CreateBlobContainerAsync(blobOptions.Value.ContainerName, cancellationToken: cancellationToken);
        }
        
        var blobContainerClient = blobServiceClient.GetBlobContainerClient(blobOptions.Value.ContainerName);
        
        var blobClient = blobContainerClient.GetBlobClient($"{musicProduct.Name}.txt");
        
        var data =  Convert.FromBase64String(musicProduct.Base64Image);
        
        var binaryData = new BinaryData(data);
        
        await blobClient.UploadAsync(binaryData, cancellationToken: cancellationToken);
        
        var newsEntity = mapper.Map<MusicProduct>(musicProduct);

        newsEntity.BlobId = $"{blobClient.Uri}/{musicProduct.Name}.txt";
        
        var id = await genericMusicRepository.CreateAsync(newsEntity, cancellationToken);

        return Result<Guid>.Success(id);
    }

    public async Task<IResult<bool>> UpdateMusicProductAsync(MusicProductDto musicProduct,
        CancellationToken cancellationToken = default)
    {
        if(blobServiceClient.GetBlobContainerClient(blobOptions.Value.ContainerName) == null)
        {
            await blobServiceClient.CreateBlobContainerAsync(blobOptions.Value.ContainerName, cancellationToken: cancellationToken);
        }
        
        var blobContainerClient = blobServiceClient.GetBlobContainerClient(blobOptions.Value.ContainerName);
        
        var blobClient = blobContainerClient.GetBlobClient($"{musicProduct.Name}.txt");
        
        await blobClient.DeleteIfExistsAsync(cancellationToken: cancellationToken);
        
        var data =  Convert.FromBase64String(musicProduct.Base64Image);
        
        var binaryData = new BinaryData(data);
        
        await blobClient.UploadAsync(binaryData, cancellationToken: cancellationToken);
        
        var newsEntity = mapper.Map<MusicProduct>(musicProduct);

        newsEntity.BlobId = $"{blobClient.Uri}/{musicProduct.Name}.txt";
        
        var id = await genericMusicRepository.CreateAsync(newsEntity, cancellationToken);

        return Result<bool>.Success();
    }

    public async Task<IResult<bool>> DeleteMusicProductAsync(Guid id,
        CancellationToken cancellationToken = default)
    {
        var musicProduct = await genericMusicRepository.GetWithTrackingByIdAsync(id, cancellationToken);

        if (musicProduct == null)
        {
            return Result<bool>.Failure();
        }
        
        await genericMusicRepository.DeleteAsync(musicProduct, cancellationToken);
        return Result<bool>.Success();
    }
}