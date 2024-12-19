using Domain.Entities.General;

namespace Application.Interfaces.Repositories;

public interface ICartRepository
{
    Task<Cart?> GetCartByUserIdAsync(Guid userId,
        CancellationToken cancellationToken = default);
}