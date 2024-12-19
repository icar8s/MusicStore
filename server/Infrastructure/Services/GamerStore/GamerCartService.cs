using Application.DTOs.GameStore;
using Application.DTOs.General;
using Application.Interfaces.Services.GamerStore;
using Shared.Interfaces;

namespace Infrastructure.Services.GamerStore;

public class GamerCartService: IGamerCartService
{
    public Task<IResult<CartDto<GamerProductShortDto>>> AddGamerToCartAsync(GamerProductShortDto gamerProduct,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IResult<bool>> RemoveGamerFromCartAsync(Guid gamerId, 
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}