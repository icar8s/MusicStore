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
    IRepository<Sale> genericSaleRepository,
    ISaleRepository saleRepository,
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
        var musicEntity = mapper.Map<MusicProduct>(musicProduct);
        
        var id = await genericMusicRepository.CreateAsync(musicEntity, cancellationToken);
        
        if (musicProduct.Percentage >= 0)
        {
            var sale = new Sale
            {
                ProductId = id,
                Percentage = musicProduct.Percentage
            };
            
            await genericSaleRepository.CreateAsync(sale, cancellationToken);
        }
        
        return Result<Guid>.Success(id);
    }

    public async Task<IResult<bool>> UpdateMusicProductAsync(MusicProductDto musicProduct,
        CancellationToken cancellationToken = default)
    {
        var musicEntity = mapper.Map<MusicProduct>(musicProduct);
        
        await genericMusicRepository.UpdateAsync(musicEntity, cancellationToken);
        
        var sale = await saleRepository.GetByProductIdAsync(musicEntity.Id, cancellationToken);
        
        if (musicProduct.Percentage >= 0)
        {
            if (sale != null)
            {
                sale.Percentage = musicProduct.Percentage;
                await genericSaleRepository.UpdateAsync(sale, cancellationToken);
            }
            else
            {
                sale = new Sale
                {
                    ProductId = musicEntity.Id,
                    Percentage = musicProduct.Percentage
                };
                await genericSaleRepository.CreateAsync(sale, cancellationToken);
            }
        }
        
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