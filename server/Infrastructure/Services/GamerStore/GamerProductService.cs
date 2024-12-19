using Application.Common;
using Application.DTOs.GameStore;
using Application.Interfaces.Services.GamerStore;
using Domain.Enums;
using Shared.Interfaces;

namespace Infrastructure.Services.GamerStore;

public class GamerProductService: IGamerProductService
{
    public Task<IResult<GamerProductDetailDto>> GetGamerProductAsync(Guid id,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IPaginatedResult<GamerProductShortDto>> GetGamerProductsAsync(PageIndex page,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IPaginatedResult<GamerProductShortDto>> GetGamerProductsByTypeAsync(PageIndex page,
        GamerProductType gamerProductType,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

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

    public Task<IResult<bool>> DeleteGamerProductAsync(Guid id,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}