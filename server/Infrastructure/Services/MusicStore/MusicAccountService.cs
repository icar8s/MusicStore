using Application.DTOs.General;
using Application.Interfaces.Services.MusicStore;
using Shared.Interfaces;

namespace Infrastructure.Services.MusicStore;

public class MusicAccountService: IMusicAccountService
{
    public Task<IResult<Guid>> RegisterAsync(UserRegisterDto userRegister,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IResult<bool>> EmailConfirmAsync(string code,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}