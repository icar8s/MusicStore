using Application.Common;
using Microsoft.AspNetCore.Mvc;

namespace MusicStore.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class NewsController: ControllerBase
{
    [HttpGet("news")]
    public Task GetPageAsync(PageIndex page)
    {
        throw new NotImplementedException();
    }

    [HttpPost]
    public Task CreateAsync()
    {
        throw new NotImplementedException();
    }
}