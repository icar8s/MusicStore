using Application.DTOs.General;
using Application.DTOs.MusicStore;
using Shared.Interfaces;

namespace Application.Interfaces.Services.MusicStore;

public interface IMusicCartService
{
    Task<IResult<CartDto<MusicProductShortDto>>> GetCartAsync(Guid cartId,
        CancellationToken cancellationToken = default);
    
    Task<IResult<Guid>> AddGamerToCartAsync(Guid productId,
        CancellationToken cancellationToken = default);
    
    Task<IResult<bool>> RemoveGamerFromCartAsync(Guid productId,
        CancellationToken cancellationToken = default);
}