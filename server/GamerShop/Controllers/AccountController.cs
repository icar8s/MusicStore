using Microsoft.AspNetCore.Mvc;

namespace GamerShop.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class AccountController: ControllerBase
{
    [HttpPost]
    public Task RegisterAsync()
    {
        throw new NotImplementedException();
    }
    
    [HttpPost]
    public Task EmailConfirmationAsync()
    {
        throw new NotImplementedException();
    }
}