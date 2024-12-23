using Application.Common;
using Application.DTOs.GameStore;
using Domain.Enums;
using Shared.Interfaces;

namespace Application.Interfaces.Services.GamerStore;

public interface IGamerProductService
{
    Task<IResult<GamerProductDetailDto>> GetGamerProductAsync(Guid id,
        CancellationToken cancellationToken = default);
    
    Task<IPaginatedResult<GamerProductShortDto>> GetGamerProductsAsync(PageIndex page,
        CancellationToken cancellationToken = default);
    
    Task<IPaginatedResult<GamerProductShortDto>> GetGamerProductsByTypeAsync(PageIndex page,
        GamerProductType gamerProductType,
        CancellationToken cancellationToken = default);
    
    Task<IResult<Guid>> AddGamerProductAsync(GamerProductDto gamerProduct,
        CancellationToken cancellationToken = default);
    
    Task<IResult<bool>> UpdateGamerProductAsync(GamerProductDto gamerProduct,
        CancellationToken cancellationToken = default);
    
    Task<IResult<bool>> DeleteGamerProductAsync(Guid id,
        CancellationToken cancellationToken = default);
}