using Domain.Entities.General;

namespace Application.Interfaces.Repositories;

public interface ISaleRepository
{
    Task<Sale?> GetByProductIdAsync(Guid productId,
        CancellationToken cancellationToken = default);
}