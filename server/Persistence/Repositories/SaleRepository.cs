using Application.Interfaces.Repositories;
using Domain.Entities.General;
using Microsoft.EntityFrameworkCore;
using Persistence.Contexts;

namespace Persistence.Repositories;

public class SaleRepository<TContext>(TContext context):
    ISaleRepository where TContext : BaseDbContext
{
    public async Task<Sale?> GetByProductIdAsync(Guid productId,
        CancellationToken cancellationToken = default)
        => await context
            .Set<Sale>()
            .FirstOrDefaultAsync(x => x.ProductId == productId, cancellationToken);
}