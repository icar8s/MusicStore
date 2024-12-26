using Application.Common;
using Application.DTOs.General;
using Application.Interfaces.Services.MusicStore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MusicStore.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class NewsController(IMusicNewsService musicNewsService): ControllerBase
{
    [HttpGet("news")]
    [AllowAnonymous]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetPageAsync([FromQuery]PageIndex page,
        CancellationToken ctx = default)
    {
        var result = await musicNewsService.GetNewsAsync(page, ctx);

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
        var result = await musicNewsService.CreateAsync(newsDto, ctx);

        if (!result.IsSucceeded)
        {
            return BadRequest();
        }
        
        return Ok(result.Data);
    }
}