using Application.Common;
using Domain.Enums;
using Microsoft.AspNetCore.Mvc;

namespace MusicStore.Controllers;

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

    [HttpGet("{type:mpt}")]
    public Task GetPageByProductTypeAsync(MusicProductType type, PageIndex page)
    {
        throw new NotImplementedException();
    }

    [HttpPost("add")]
    public Task CreateAsync()
    {
        throw new NotImplementedException();
    }

    [HttpPut("update")]
    public Task UpdateAsync()
    {
        throw new NotImplementedException();
    }

    [HttpDelete("delete/{id:guid}")]
    public Task DeleteByIdAsync([FromRoute] Guid id)
    {
        throw new NotImplementedException();
    }
}