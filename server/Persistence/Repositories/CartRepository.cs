using Application.Interfaces.Repositories;
using Domain.Entities.General;
using Microsoft.EntityFrameworkCore;
using Persistence.Contexts;

namespace Persistence.Repositories;

public sealed class CartRepository<TContext>(TContext context):
    ICartRepository where TContext : BaseDbContext
{
    public async Task<Cart?> GetCartByUserIdAsync(Guid userId,
        CancellationToken cancellationToken = default)
        => await context
            .Set<Cart>()
            .Include(x=>x.Products)
            .ThenInclude(x=>x.Product)
            .FirstOrDefaultAsync(x=>x.UserId == userId, cancellationToken);
}