using Application.Common;
using Application.DTOs.MusicStore;
using Domain.Entities.General;
using Domain.Enums;
using Microsoft.AspNetCore.Mvc;

namespace GamerShop.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class ProductController : ControllerBase
{
    // [ProducesResponseType<Product>(StatusCodes.Status200OK)]
    // [ProducesResponseType(StatusCodes.Status404NotFound)]
    [HttpGet("{id:guid}")]
    public Task GetDetailByIdAsync([FromRoute] Guid id)
    {
        throw new NotImplementedException();
    }
    
    [HttpGet("page")]
    public Task GetPageAsync(PageIndex page)
    {
        throw new NotImplementedException();
    }

    [HttpGet("{type:gpt}")]
    public Task GetPageByProductTypeAsync(GamerProductType type, PageIndex page)
    {
        throw new NotImplementedException();
    }

    [HttpPost("add")]
    public Task CreateAsync([FromBody] MusicProductDto product)
    {
        throw new NotImplementedException();
    }

    [HttpPut("update/{id:guid}")]
    public Task UpdateAsync(Guid id, [FromBody] MusicProductDto product)
    {
        throw new NotImplementedException();
    }

    [HttpDelete("delete/{id:guid}")]
    public Task DeleteByIdAsync([FromRoute] Guid id)
    {
        throw new NotImplementedException();
    }
}