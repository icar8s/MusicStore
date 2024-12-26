using Domain.Entities.GamerStore;
using Domain.Entities.General;
using Domain.Entities.General.Links;
using Microsoft.AspNetCore.Identity;

namespace Persistence.SeedData.FakeData;

public class GamerStoreData: AbstractData<GamerProduct>
{
    private static readonly Guid _userId = Guid.NewGuid();
    private static readonly Guid _roleId = Guid.NewGuid();
    
    public override IList<User> Users => new List<User>()
    {
        new User
        {
            Id = _userId,
            Email = "admin@aaa.com",
            NormalizedEmail = "ADMIN@AAA.COM",
            UserName = "vadmin",
            NormalizedUserName = "VADMIN",
            EmailConfirmed = true,
            PasswordHash =
                "AQAAAAIAAYagAAAAEOObrxK8MEi9CAr6V1lm3CjQwpdMWO46J15/fN4AshwLh45ThOxSLoOFh1id4JNFQA==", // !QAZ2wsx
            SecurityStamp = Guid.NewGuid().ToString("D"),
            Balance = 20000,
        }
    };
    
    public override IList<IdentityRole<Guid>> Roles => new List<IdentityRole<Guid>>()
    {
        new ()
        {
            Id = _roleId,
            Name = "admin",
            NormalizedName = "ADMIN",
            ConcurrencyStamp = Guid.NewGuid().ToString("D")
        }
    };
    
    public override IList<IdentityUserRole<Guid>> UserRoles => new List<IdentityUserRole<Guid>>()
    {
        new ()
        {
            UserId = _userId,
            RoleId = _roleId
        }
    };
    
    public override IList<GamerProduct> Products => new List<GamerProduct>();
    
    public override IList<Cart> Carts => new List<Cart>();
    
    public override IList<Sale> Sales => new List<Sale>();
    
    public override IList<News> News => new List<News>();
    
    public override IList<CartProduct> CartProducts => new List<CartProduct>();
}