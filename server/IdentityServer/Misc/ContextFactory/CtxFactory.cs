using Persistence.Contexts;

namespace IdentityServer.Misc.ContextFactory;

public class CtxFactory(IServiceProvider provider,
    IHttpContextAccessor accessor): IContextFactory
{
    public BaseDbContext GetContext()
    {
        var useMusicStore = (accessor.HttpContext?.Request.Headers["Store-Type"] ?? "") == "Music";
     
        if (useMusicStore)
        {
            return provider.GetRequiredService<MusicStoreContext>();
        }
        return provider.GetRequiredService<GameStoreContext>();
    }
}