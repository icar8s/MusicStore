using Application.Interfaces;
using Domain.Entities.General;
using Persistence.Contexts;

namespace Persistence.SeedData;

public sealed class DbInitializer<TContext, TData, TDataType>(TContext context) : IDbInitializer<TData>
    where TContext : BaseDbContext 
    where TData : AbstractData<TDataType>
    where TDataType : Product
{
    public async Task InitializeAsync(TData data,
        CancellationToken cancellationToken = default)
    {
        await context.Database.EnsureDeletedAsync(cancellationToken);
        await context.Database.EnsureCreatedAsync(cancellationToken);
    }

    public void Initialize(TData data)
    {
        context.Database.EnsureDeleted();
        context.Database.EnsureCreated();
    }
}