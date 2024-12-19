using Application.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using Shared;
using Shared.Interfaces;

namespace Infrastructure.Services;

public class IdentityService(IHttpContextAccessor accessor) : IIdentityService
{
    public IResult<Guid> GetIdentity()
    {
        var userIdentity = accessor.HttpContext?.User.FindFirst("sub")?.Value;

        if (userIdentity == null)
        {
            return Result<Guid>.Failure();
        }

        return Result<Guid>.Success(Guid.Parse(userIdentity));
    }
}