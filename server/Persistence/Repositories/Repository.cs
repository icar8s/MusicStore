using Application.Interfaces.Repositories;
using Domain.Entities.Abstract;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Repositories;

public class Repository<TEntity, TContext>(TContext context) 
    : IRepository<TEntity> 
    where TEntity : BaseEntity 
    where TContext : DbContext
{
    public IQueryable<TEntity> Entities => context.Set<TEntity>();
    
    public async Task<TEntity?> GetByIdAsync(Guid id,
        CancellationToken cancellationToken = default)
        => await context
            .Set<TEntity>()
            .AsNoTracking()
            .FirstOrDefaultAsync(x=>x.Id==id, cancellationToken);

    public async Task<TEntity?> GetWithTrackingByIdAsync(Guid id,
        CancellationToken cancellationToken = default)
        => await context
            .Set<TEntity>()
            .FirstOrDefaultAsync(x=>x.Id==id, cancellationToken);
    
    public async Task<Guid> CreateAsync(TEntity entity,
        CancellationToken cancellationToken = default)
    {
        context.Entry(entity).State = EntityState.Added;
        await context.SaveChangesAsync(cancellationToken);

        return entity.Id;
    }

    public async Task UpdateAsync(TEntity entity,
        CancellationToken cancellationToken = default)
    {
        context.Entry(entity).State = EntityState.Modified;
        await context.SaveChangesAsync(cancellationToken);
    }

    public Task DeleteAsync(TEntity entity,
        CancellationToken cancellationToken = default)
    {
        context.Entry(entity).State = EntityState.Deleted;
        return context.SaveChangesAsync(cancellationToken);
    }
}