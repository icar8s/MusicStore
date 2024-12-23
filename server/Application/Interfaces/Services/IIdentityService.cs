using Shared.Interfaces;

namespace Application.Interfaces.Services;

public interface IIdentityService
{
    IResult<Guid> GetIdentity();
}