using Application.Interfaces.Repositories;
using Domain.Entities.General.Links;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Repositories;

public class CartProductRepository<TContext>(TContext context) :
    ICartProductRepository where TContext : DbContext
{
    public async Task<Guid?> GetCartIdAsync(Guid cartId,
        Guid productId,
        CancellationToken cancellationToken = default)
    {
        var cartProduct = await context
            .Set<CartProduct>()
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.ProductId == productId && x.CartId == cartId, cancellationToken);
        
        return cartProduct?.CartId;
    }
}