using Application.DTOs.GameStore;
using Application.DTOs.General;
using Shared.Interfaces;

namespace Application.Interfaces.Services.GamerStore;

public interface IGamerCartService
{
    Task<IResult<CartDto<GamerProductShortDto>>> AddGamerToCartAsync(GamerProductShortDto gamerProduct,
        CancellationToken cancellationToken = default);
    
    Task<IResult<bool>> RemoveGamerFromCartAsync(Guid gamerId,
        CancellationToken cancellationToken = default);
}