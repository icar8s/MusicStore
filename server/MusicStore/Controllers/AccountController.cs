using Microsoft.AspNetCore.Mvc;

namespace MusicStore.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class AccountController: ControllerBase
{
    [HttpPost]
    public Task RegisterAsync()
    {
        throw new NotImplementedException();
    }
}