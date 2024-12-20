using Application.DTOs.General;
using Application.DTOs.MusicStore;
using Shared.Interfaces;

namespace Application.Interfaces.Services.MusicStore;

public interface IMusicCartService
{
    Task<IResult<CartDto<MusicProductShortDto>>> GetCartAsync(CancellationToken cancellationToken = default);
    
    Task<IResult<Guid>> AddGamerToCartAsync(Guid productId,
        CancellationToken cancellationToken = default);
    
    Task<IResult<bool>> RemoveProductFromCartAsync(Guid productId,
        CancellationToken cancellationToken = default);
}