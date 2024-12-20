using Application.Common;
using Application.DTOs.GameStore;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services.GamerStore;
using Azure.Storage.Blobs;
using Domain.Entities.GamerStore;
using Domain.Entities.General;
using Domain.Enums;
using Domain.Options;
using Mapster;
using MapsterMapper;
using Microsoft.Extensions.Options;
using Persistence.Contexts;
using Persistence.Repositories;
using Shared;
using Shared.Interfaces;

namespace Infrastructure.Services.GamerStore;

public class GamerProductService(
    IRepository<GamerProduct> genericGamerRepository,
    IOptions<BlobOptions> blobOptions,
    IMapper mapper
    ): IGamerProductService
{
    public async Task<IResult<GamerProductDetailDto>> GetGamerProductAsync(Guid id,
        CancellationToken cancellationToken = default)
    {
        var product = await genericGamerRepository.GetByIdAsync(id, cancellationToken);

        if (product == null)
        {
            return Result<GamerProductDetailDto>.Failure();
        }

        return Result<GamerProductDetailDto>.Success(mapper.Map<GamerProductDetailDto>(product));
    }

    public async Task<IPaginatedResult<GamerProductShortDto>> GetGamerProductsAsync(PageIndex page,
        CancellationToken cancellationToken = default)
        => await genericGamerRepository
            .Entities
            .ProjectToType<GamerProductShortDto>(mapper.Config)
            .ToPaginatedListAsync(page.PageNumber, page.PageSize, cancellationToken);

    public async Task<IPaginatedResult<GamerProductShortDto>> GetGamerProductsByTypeAsync(PageIndex page,
        GamerProductType gamerProductType,
        CancellationToken cancellationToken = default)
        => await genericGamerRepository
            .Entities
            .Where(x=>x.Type == gamerProductType)
            .ProjectToType<GamerProductShortDto>(mapper.Config)
            .ToPaginatedListAsync(page.PageNumber, page.PageSize, cancellationToken);

    public async Task<IResult<Guid>> AddGamerProductAsync(GamerProductDto gamerProduct,
        CancellationToken cancellationToken = default)
    {
        var blobServiceClient = new BlobServiceClient(blobOptions.Value.ConnectionString);
        
        if(blobServiceClient.GetBlobContainerClient(blobOptions.Value.ContainerName) == null)
        {
            await blobServiceClient.CreateBlobContainerAsync(blobOptions.Value.ContainerName, cancellationToken: cancellationToken);
        }
        
        var blobContainerClient = blobServiceClient.GetBlobContainerClient(blobOptions.Value.ContainerName);
        
        var blobClient = blobContainerClient.GetBlobClient($"{gamerProduct.Name}.txt");
        
        var data =  Convert.FromBase64String(gamerProduct.Base64Image);
        
        var binaryData = new BinaryData(data);
        
        await blobClient.UploadAsync(binaryData, cancellationToken: cancellationToken);
        
        var newsEntity = mapper.Map<GamerProduct>(gamerProduct);

        newsEntity.BlobId = $"{blobClient.Uri}/{gamerProduct.Name}.txt";
        
        var id = await genericGamerRepository.CreateAsync(newsEntity, cancellationToken);

        return Result<Guid>.Success(id);
    }

    public async Task<IResult<bool>> UpdateGamerProductAsync(GamerProductDto gamerProduct,
        CancellationToken cancellationToken = default)
    {
        var blobServiceClient = new BlobServiceClient(blobOptions.Value.ConnectionString);
        
        if(blobServiceClient.GetBlobContainerClient(blobOptions.Value.ContainerName) == null)
        {
            await blobServiceClient.CreateBlobContainerAsync(blobOptions.Value.ContainerName, cancellationToken: cancellationToken);
        }
        
        var blobContainerClient = blobServiceClient.GetBlobContainerClient(blobOptions.Value.ContainerName);
        
        var blobClient = blobContainerClient.GetBlobClient($"{gamerProduct.Name}.txt");
        
        await blobClient.DeleteIfExistsAsync(cancellationToken: cancellationToken);
        
        var data =  Convert.FromBase64String(gamerProduct.Base64Image);
        
        var binaryData = new BinaryData(data);
        
        await blobClient.UploadAsync(binaryData, cancellationToken: cancellationToken);
        
        var newsEntity = mapper.Map<GamerProduct>(gamerProduct);

        newsEntity.BlobId = $"{blobClient.Uri}/{gamerProduct.Name}.txt";
        
        var id = await genericGamerRepository.CreateAsync(newsEntity, cancellationToken);

        return Result<bool>.Success();
    }

    public async Task<IResult<bool>> DeleteGamerProductAsync(Guid id,
        CancellationToken cancellationToken = default)
    {
        var musicProduct = await genericGamerRepository.GetWithTrackingByIdAsync(id, cancellationToken);

        if (musicProduct == null)
        {
            return Result<bool>.Failure();
        }
        
        await genericGamerRepository.DeleteAsync(musicProduct, cancellationToken);
        return Result<bool>.Success();
    }
}