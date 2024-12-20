using Application.Common;
using Application.Interfaces.Services.MusicStore;
using Domain.Enums;
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
    public async Task<IActionResult> GetDetailByIdAsync([FromRoute] Guid id)
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
//admin
    [HttpPost("add")]
    public Task CreateAsync()
    {
        throw new NotImplementedException();
    }
//admin
    [HttpPut("update")]
    public Task UpdateAsync()
    {
        throw new NotImplementedException();
    }
//admin
    [HttpDelete("delete/{id:guid}")]
    public Task DeleteByIdAsync([FromRoute] Guid id)
    {
        throw new NotImplementedException();
    }
}