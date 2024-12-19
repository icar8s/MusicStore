using Domain.Entities.GamerStore;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Contexts;

public class GameStoreContext(DbContextOptions<GameStoreContext> options) :
    BaseDbContext(options)
{
    public DbSet<GamerProduct> Products => Set<GamerProduct>();
}