using Application.DTOs.GameStore;
using Application.DTOs.General;
using Shared.Interfaces;

namespace Application.Interfaces.Services.GamerStore;

public interface IGamerCartService
{
    Task<IResult<CartDto<GamerProductShortDto>>> GetCartAsync(CancellationToken cancellationToken = default);
    
    Task<IResult<Guid>> AddGamerToCartAsync(Guid productId,
        CancellationToken cancellationToken = default);
    
    Task<IResult<bool>> RemoveProductFromCartAsync(Guid productId,
        CancellationToken cancellationToken = default);
    
}