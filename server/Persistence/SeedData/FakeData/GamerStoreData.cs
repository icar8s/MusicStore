using Domain.Entities.GamerStore;
using Domain.Entities.General;
using Domain.Entities.General.Links;
using Microsoft.AspNetCore.Identity;

namespace Persistence.SeedData.FakeData;

public class GamerStoreData: AbstractData<GamerProduct>
{
    public override IList<User> Users => new List<User>();
    
    public override IList<IdentityRole<Guid>> Roles => new List<IdentityRole<Guid>>();
    
    public override IList<IdentityUserRole<Guid>> UserRoles => new List<IdentityUserRole<Guid>>();
    
    public override IList<GamerProduct> Products => new List<GamerProduct>();
    
    public override IList<Cart> Carts => new List<Cart>();
    
    public override IList<Sale> Sales => new List<Sale>();
    
    public override IList<News> News => new List<News>();
    
    public override IList<CartProduct> CartProducts => new List<CartProduct>();
    
    public override IList<SaleProduct> SaleProducts => new List<SaleProduct>();
}