using Application.Common;
using Application.DTOs.MusicStore;
using Application.Interfaces.Services.MusicStore;
using Domain.Entities.MusicStore;
using Domain.Enums;
using Mapster;
using MapsterMapper;
using Persistence.Contexts;
using Persistence.Repositories;
using Shared;
using Shared.Interfaces;

namespace Infrastructure.Services.MusicStore;

public class MusicProductService(
    Repository<MusicProduct, MusicStoreContext> genericMusicRepository,
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

    public Task<IResult<Guid>> AddMusicProductAsync(MusicProductDto musicProduct,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IResult<bool>> UpdateMusicProductAsync(MusicProductDto musicProduct,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
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