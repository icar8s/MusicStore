using Application.Common;
using Application.DTOs.General;
using Application.Interfaces.Services.GamerStore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GamerShop.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class NewsController(IGamerNewsService gamerNewsService): ControllerBase
{
    [HttpGet("news")]
    [AllowAnonymous]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetPageAsync([FromQuery]PageIndex page)
    {
        var result = await gamerNewsService.GetNewsAsync(page);
        
        if (!result.IsSucceeded)
        {
            return BadRequest();
        }
        
        return Ok(result);
    }

    [HttpPost]
    [Authorize(Roles = "admin")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status403Forbidden)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> CreateAsync([FromBody]NewsDto newsDto,
        CancellationToken ctx = default)
    {
        
        var result = await gamerNewsService.CreateAsync(newsDto, ctx);
        
        if (!result.IsSucceeded)
        {
            return BadRequest();
        }
        
        return Ok(result.Data);
    }
}