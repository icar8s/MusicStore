using System.Reflection;
using Domain.Entities.General;
using Domain.Entities.General.Links;
using Domain.Entities.MusicStore;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Contexts;

public sealed class MusicStoreContext(DbContextOptions<MusicStoreContext> options) : BaseDbContext<MusicStoreContext>(options)
{
    public DbSet<Cart> Carts => Set<Cart>();

    public DbSet<MusicProduct> Products => Set<MusicProduct>();
    
    public DbSet<News> News => Set<News>();
    
    public DbSet<CartProduct> CartProducts => Set<CartProduct>();
    
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}