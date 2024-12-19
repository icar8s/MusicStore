using Application.DTOs.General;
using Shared.Interfaces;

namespace Application.Interfaces.Services.MusicStore;

public interface IMusicAccountService
{
    Task<IResult<Guid>> RegisterAsync(UserRegisterDto userRegister,
        CancellationToken cancellationToken = default);
    
    Task<IResult<bool>> EmailConfirmAsync(string code,
        CancellationToken cancellationToken = default);
}