using Application.DTOs.General;
using Application.Interfaces.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MusicStore.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class AccountController(IUserService userService): ControllerBase
{
    [HttpPost]
    [AllowAnonymous]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public async Task<IActionResult> RegisterAsync(UserRegisterDto userRegisterDto,
        CancellationToken ctx = default)
    {
        var result = await userService.RegisterUserAsync(userRegisterDto, ctx);
        if (result.IsSucceeded)
        {
            return Created();
        }
        
        return BadRequest();
    }
}