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
    CartProductRepository<MusicStoreContext> cartProductRepository,
    CartRepository<MusicStoreContext> cartRepository): IMusicCartService
{
    public Task<IResult<CartDto<MusicProductShortDto>>> GetCartAsync(Guid cartId,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public async Task<IResult<Guid>> AddGamerToCartAsync(Guid productId,
        CancellationToken cancellationToken = default)
    {
        var cartResult = await GetCardAsync(cancellationToken);
        if (!cartResult.IsSucceeded)
        {
            return Result<Guid>.Failure();
        }
        
        var cartProduct = new CartProduct{ProductId = productId, CartId = cartResult.Data!.Id};
        
        var id = await genericCartProductRepository.CreateAsync(cartProduct, cancellationToken);
        
        return Result<Guid>.Success(id);
    }

    public async Task<IResult<bool>> RemoveGamerFromCartAsync(Guid productId,
        CancellationToken cancellationToken = default)
    {
        var cartResult = await GetCardAsync(cancellationToken);
        if (!cartResult.IsSucceeded)
        {
            return Result<bool>.Failure();
        }

        var cartProductId =
            await cartProductRepository.GetCartIdAsync(cartResult.Data!.Id, productId, cancellationToken);

        if (!cartProductId.HasValue)
        {
            return Result<bool>.Failure();
        }

        var cartProduct =
            await genericCartProductRepository.GetWithTrackingByIdAsync(cartProductId.Value, cancellationToken);

        if (cartProduct == null)
        {
            return Result<bool>.Failure();
        }

        await genericCartProductRepository.DeleteAsync(cartProduct, cancellationToken);
        
        return Result<bool>.Success();
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