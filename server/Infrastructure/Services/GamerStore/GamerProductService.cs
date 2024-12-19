using Application.Common;
using Application.DTOs.GameStore;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services.GamerStore;
using Domain.Entities.GamerStore;
using Domain.Enums;
using Mapster;
using MapsterMapper;
using Persistence.Contexts;
using Persistence.Repositories;
using Shared;
using Shared.Interfaces;

namespace Infrastructure.Services.GamerStore;

public class GamerProductService(
    IRepository<GamerProduct> genericGamerRepository,
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

    public Task<IResult<Guid>> AddGamerProductAsync(GamerProductDto gamerProduct,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IResult<bool>> UpdateGamerProductAsync(GamerProductDto gamerProduct,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
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