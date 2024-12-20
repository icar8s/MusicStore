using Domain.Entities.General;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace IdentityServer.Misc.ContextFactory;

public class DynamicUserStore(IContextFactory contextFactory)
    : UserStore<User, IdentityRole<Guid>, DbContext, Guid>(contextFactory.GetContext())
{
    public override DbContext Context => contextFactory.GetContext();
}