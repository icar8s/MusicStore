using Application.DTOs.General;
using Application.Interfaces.Services;
using Domain.Entities.General;
using MapsterMapper;
using Microsoft.AspNetCore.Identity;
using Shared;

namespace Infrastructure.Services;

public class UserService(
    UserManager<User> userManager,
    RoleManager<IdentityRole> roleManager,
    IMapper mapper
    ) : IUserService
{
    public async Task<Result<bool>> RegisterUserAsync(UserRegisterDto userRegisterDto,
        CancellationToken cancellationToken = default)
    {
        var user = mapper.Map<User>(userRegisterDto);
        
        await userManager.CreateAsync(user, userRegisterDto.Password);
        
        if (!await roleManager.RoleExistsAsync("user"))
        {
            await roleManager.CreateAsync(new IdentityRole("user"));
        }
        
        await userManager.AddToRoleAsync(user, "user");
        
        return Result<bool>.Success();
    }
}