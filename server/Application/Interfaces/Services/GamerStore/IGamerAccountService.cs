using Application.DTOs.General;
using Shared.Interfaces;

namespace Application.Interfaces.Services.GamerStore;

public interface IGamerAccountService
{
    Task<IResult<Guid>> RegisterAsync(UserRegisterDto userRegister,
        CancellationToken cancellationToken = default);
    
    Task<IResult<bool>> EmailConfirmAsync(UserRegisterDto userRegister,
        CancellationToken cancellationToken = default);
}