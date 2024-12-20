using Persistence.Contexts;

namespace IdentityServer.Misc.ContextFactory;

public interface IContextFactory
{
    BaseDbContext GetContext();
}