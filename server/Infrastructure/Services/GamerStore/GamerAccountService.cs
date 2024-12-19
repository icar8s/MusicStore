using Application.DTOs.General;
using Application.Interfaces.Services.GamerStore;
using Shared.Interfaces;

namespace Infrastructure.Services.GamerStore;

public sealed class GamerAccountService: IGamerAccountService
{
    public Task<IResult<Guid>> RegisterAsync(UserRegisterDto userRegister,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IResult<bool>> EmailConfirmAsync(UserRegisterDto userRegister,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}