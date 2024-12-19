namespace Application.Interfaces.Repositories;

public interface ICartProductRepository
{
    Task<Guid?> GetCartIdAsync(Guid cartId,
        Guid productId,
        CancellationToken cancellationToken = default);
    
}