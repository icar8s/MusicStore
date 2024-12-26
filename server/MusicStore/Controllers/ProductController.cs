using Application.Common;
using Application.DTOs.MusicStore;
using Application.Interfaces.Services.MusicStore;
using Domain.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MusicStore.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class ProductController(IMusicProductService musicProductService) : ControllerBase
{
    [HttpGet("{id:guid}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetDetailByIdAsync(Guid id)
    {
        var result = await musicProductService.GetMusicProductAsync(id);

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
    public async Task<IActionResult> GetPageAsync([FromQuery]PageIndex page)
    {
        var result = await musicProductService.GetMusicProductsAsync(page);
        
        if (!result.IsSucceeded)
        {
            return NotFound();
        }
        
        return Ok(result);
        
    }
    
    [HttpGet("page/{type:mpt}")]
    [AllowAnonymous]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetPageByProductTypeAsync(MusicProductType type, [FromQuery]PageIndex page)
    {
        var result = await musicProductService.GetMusicProductsByTypeAsync(page, type);
        
        if (!result.IsSucceeded)
        {
            return NotFound();
        }
        
        return Ok(result);
    }

    [HttpPost("add")]
    [Authorize(Roles = "admin")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status403Forbidden)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> CreateAsync(MusicProductDto product)
    {
        var result = await musicProductService.AddMusicProductAsync(product);
        
        if (!result.IsSucceeded)
        {
            return BadRequest();
        }
        
        return Ok(result.Data);
        
    }

    [HttpPut("update")]
    [Authorize(Roles = "admin")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status403Forbidden)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> UpdateAsync(MusicProductDto product)
    {
        var result = await musicProductService.UpdateMusicProductAsync(product);
        
        if (!result.IsSucceeded)
        {
            return BadRequest();
        }
        
        return Ok(result.Data);
    }

    [HttpDelete("delete/{id:guid}")]
    [Authorize(Roles = "admin")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status403Forbidden)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> DeleteByIdAsync([FromRoute] Guid id)
    {
        var result = await musicProductService.DeleteMusicProductAsync(id);
        
        if (!result.IsSucceeded)
        {
            return BadRequest();
        }
        
        return Ok(result.Data);
    }
}