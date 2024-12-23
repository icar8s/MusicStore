using Application.DTOs.General;
using Microsoft.EntityFrameworkCore;
using Shared;

namespace Application.Interfaces.Services;

public interface IUserService
{
    Task<Result<bool>> RegisterUserAsync(UserRegisterDto userRegisterDto,
        CancellationToken cancellationToken = default);
    
}