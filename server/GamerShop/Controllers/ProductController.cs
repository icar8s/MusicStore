using Application.Common;
using Application.DTOs.GameStore;
using Application.DTOs.MusicStore;
using Application.Interfaces.Services.GamerStore;
using Domain.Entities.GamerStore;
using Domain.Entities.General;
using Domain.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GamerShop.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class ProductController(IGamerProductService gamerProductService) : ControllerBase
{
    [HttpGet("{id:guid}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetDetailByIdAsync([FromRoute] Guid id)
    {
        var result = await gamerProductService.GetGamerProductAsync(id);
        
        if (!result.IsSucceeded)
        {
            return NotFound();
        }
        
        return Ok(result.Data);
    }
    
    [HttpGet("page")]
    [AllowAnonymous]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetPageAsync(PageIndex page)
    {
        var result = await gamerProductService.GetGamerProductsAsync(page);
        
        if (!result.IsSucceeded)
        {
            return NotFound();
        }
        
        return Ok(result.Data);
    }

    [HttpGet("{type:gpt}")]
    [AllowAnonymous]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetPageByProductTypeAsync(GamerProductType type, PageIndex page)
    {
        var result = await gamerProductService.GetGamerProductsByTypeAsync(page, type);
        
        if (!result.IsSucceeded)
        {
            return NotFound();
        }
        
        return Ok(result.Data);
    }

    [HttpPost("add")]
    [Authorize(Roles = "Admin")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status403Forbidden)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> CreateAsync([FromBody] GamerProductDto product)
    {
        var result = await gamerProductService.AddGamerProductAsync(product);
        
        if (!result.IsSucceeded)
        {
            return BadRequest();
        }
        
        return Ok(result.Data);
    }

    [HttpPut("update/{id:guid}")]
    [Authorize(Roles = "Admin")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status403Forbidden)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> UpdateAsync(Guid id, [FromBody] GamerProductDto product)
    {
        var result = await gamerProductService.UpdateGamerProductAsync(product);
        
        if (!result.IsSucceeded)
        {
            return BadRequest();
        }
            
        return Ok(result.Data);
    }
    

    [HttpDelete("delete/{id:guid}")]
    [Authorize(Roles = "Admin")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status403Forbidden)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> DeleteByIdAsync([FromRoute] Guid id)
    {
        var result = await gamerProductService.DeleteGamerProductAsync(id);
        
        if (!result.IsSucceeded)
        {
            return BadRequest();
        }
        
        return Ok(result.Data);
    }
}