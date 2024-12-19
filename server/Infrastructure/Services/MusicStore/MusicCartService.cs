using Application.DTOs.General;
using Application.DTOs.MusicStore;
using Application.Interfaces.Services.MusicStore;
using Domain.Entities.General;
using Domain.Entities.General.Links;
using Persistence.Contexts;
using Persistence.Repositories;
using Shared;
using Shared.Interfaces;

namespace Infrastructure.Services.MusicStore;

public class MusicCartService(IdentityService identity,
    Repository<Cart, MusicStoreContext> genericCartRepository,
    Repository<CartProduct, MusicStoreContext> genericCartProductRepository,
    CartRepository<MusicStoreContext> cartRepository): IMusicCartService
{
    public async Task<IResult<bool>> AddGamerToCartAsync(Guid productId,
        CancellationToken cancellationToken = default)
    {
        var cartResult = await GetCardAsync(cancellationToken);
        if (!cartResult.IsSucceeded)
        {
            return Result<bool>.Failure();
        }
        
    }

    public Task<IResult<bool>> RemoveGamerFromCartAsync(Guid productId,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    private async Task<IResult<Cart>> GetCardAsync(CancellationToken cancellationToken = default)
    {
        var userIdResult = identity.GetIdentity();
        if (!userIdResult.IsSucceeded)
        {
            throw new Exception("Failed to get user ID");
        }

        var cart = await cartRepository.GetCartByUserIdAsync(userIdResult.Data,
            cancellationToken);
        
        return cart != null ? Result<Cart>.Success(cart) : Result<Cart>.Failure();
    }
}