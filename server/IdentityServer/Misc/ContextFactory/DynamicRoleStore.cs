using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace IdentityServer.Misc.ContextFactory;

public class DynamicRoleStore(IContextFactory contextFactory)
    : RoleStore<IdentityRole<Guid>, DbContext, Guid>(contextFactory.GetContext())
{
    public override DbContext Context => contextFactory.GetContext();
}