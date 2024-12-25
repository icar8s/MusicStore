using System.Security.Claims;
using Application.DTOs.General;
using Application.Interfaces.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GamerShop.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class AccountController(IUserService userService): ControllerBase
{
    [HttpPost]
    [AllowAnonymous]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public async Task<IActionResult> RegisterAsync([FromBody]UserRegisterDto userRegisterDto,
        CancellationToken ctx = default)
    {
        var result = await userService.RegisterUserAsync(userRegisterDto, ctx);
        if (result.IsSucceeded)
        {
            return Created();
        }
        
        return BadRequest();
    }
    
    [HttpGet("role")]
    [Authorize]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public IActionResult GetRolesAsync()
    {
        var role = User.Claims
            .FirstOrDefault(c => c.Type == ClaimTypes.Role)?.Value;

        if (role == null)
        {
            return BadRequest();
        }
        return Ok(role);
    }
}