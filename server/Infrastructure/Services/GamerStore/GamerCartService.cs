using Application.DTOs.GameStore;
using Application.DTOs.General;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services;
using Application.Interfaces.Services.GamerStore;
using Domain.Entities.General;
using Domain.Entities.General.Links;
using MapsterMapper;
using Persistence.Contexts;
using Persistence.Repositories;
using Shared;
using Shared.Interfaces;

namespace Infrastructure.Services.GamerStore;

public class GamerCartService(IIdentityService identity,
    IMapper mapper,
    IRepository<Cart> genericCartRepository,
    IRepository<CartProduct> genericCartProductRepository,
    ICartProductRepository cartProductRepository,
    ICartRepository cartRepository): IGamerCartService
{
    public async Task<IResult<CartDto<GamerProductShortDto>>> GetCartAsync(CancellationToken cancellationToken = default)
    {
        var cartResult = await GetCardAsync(cancellationToken);

        if (!cartResult.IsSucceeded)
        {
            return Result<CartDto<GamerProductShortDto>>.Failure();
        }
        
        return Result<CartDto<GamerProductShortDto>>.Success(mapper.Map<CartDto<GamerProductShortDto>>(cartResult.Data!));
    }

    public async Task<IResult<Guid>> AddGamerToCartAsync(Guid productId, CancellationToken cancellationToken = default)
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

    public async Task<IResult<bool>> RemoveProductFromCartAsync(Guid productId, 
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