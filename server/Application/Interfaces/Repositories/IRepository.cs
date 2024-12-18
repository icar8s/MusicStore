namespace Application.Interfaces.Repositories;

public interface IRepository<TEntity> where TEntity : class
{
    IQueryable<TEntity> Entities { get; }

    Task<TEntity?> GetByIdAsync(Guid id,
        CancellationToken cancellationToken = default);
    
    Task<TEntity?> GetWithTrackingByIdAsync(Guid id,
        CancellationToken cancellationToken = default);
    
    Task<Guid> CreateAsync(TEntity entity,
        CancellationToken cancellationToken = default);
    
    Task UpdateAsync(TEntity entity,
        CancellationToken cancellationToken = default);
    
    Task DeleteAsync(TEntity entity,
        CancellationToken cancellationToken = default);
}