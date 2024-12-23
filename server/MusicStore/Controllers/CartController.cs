using Application.Interfaces.Services.MusicStore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MusicStore.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CartController(IMusicCartService musicCartService): ControllerBase
{
    [HttpGet]
    [Authorize]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetCartByIdAsync(CancellationToken ctx)
    {
        var result = await musicCartService.GetCartAsync(ctx);

        if (!result.IsSucceeded)
        {
            return NotFound();
        }
        
        return Ok(result);
    }

    [Authorize]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [HttpPut("{itemId:guid}")]
    public async Task<IActionResult> AddItemToCartAsync(Guid itemId, 
        CancellationToken ctx)
    {
        var result = await musicCartService.AddGamerToCartAsync(itemId, ctx);

        if (!result.IsSucceeded)
        {
            return NotFound();
        }

        return Ok(result.Data);
    }

    [Authorize]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [HttpDelete("{itemId:guid}")]
    public async Task<IActionResult> RemoveItemFromCartAsync(Guid itemId, 
        CancellationToken ctx)
    {
        var result = await musicCartService.AddGamerToCartAsync(itemId, ctx);

        if (!result.IsSucceeded)
        {
            return NotFound();
        }

        return Ok(result.Data);
    }
}