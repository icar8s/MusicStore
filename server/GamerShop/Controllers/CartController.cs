using Microsoft.AspNetCore.Mvc;

namespace GamerShop.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CartController: ControllerBase
{
    [HttpGet("{cartId:guid}")]
    public Task GetCartByIdAsync(Guid cartId)
    {
        throw new NotImplementedException();
    }

    [HttpPut("{cartId:guid}")]
    public Task AddItemToCartAsync(Guid cartId, Guid itemId, uint amount)
    {
        throw new NotImplementedException();
    }

    [HttpDelete("{cartId:guid}")]
    public Task RemoveItemFromCartAsync(Guid cartId, Guid itemId)
    {
        throw new NotImplementedException();
    }
}