using Domain.Entities.MusicStore;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Contexts;

public sealed class MusicStoreContext(DbContextOptions<MusicStoreContext> options) :
    BaseDbContext(options)
{
    public DbSet<MusicProduct> Products => Set<MusicProduct>();
}