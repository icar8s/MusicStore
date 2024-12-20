using Application.Interfaces.Services.GamerStore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GamerShop.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CartController(IGamerCartService gamerCartService): ControllerBase
{
    [HttpGet("{cartId:guid}")]
    [Authorize]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetCartByIdAsync(Guid cartId)
    {
        var result = await gamerCartService.GetCartAsync();
        
        if (!result.IsSucceeded)
        {
            return NotFound();
        }
        
        return Ok(result);
    }

    [HttpPut("{cartId:guid}")]
    [Authorize]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> AddItemToCartAsync(Guid cartId, Guid itemId, uint amount)
    {
        var result = await gamerCartService.AddGamerToCartAsync(itemId);
        
        if (!result.IsSucceeded)
        {
            return NotFound();
        }
        
        return Ok(result);
    }

    [HttpDelete("{cartId:guid}")]
    [Authorize]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> RemoveItemFromCartAsync(Guid cartId, Guid itemId)
    {
        var result = await gamerCartService.RemoveProductFromCartAsync(itemId);
        
        if (!result.IsSucceeded)
        {
            return NotFound();
        }
        
        return Ok(result);
    }
}