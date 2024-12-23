using System.Collections;
using Domain.Entities.General;
using Domain.Entities.General.Links;
using Microsoft.AspNetCore.Identity;

namespace Persistence.SeedData;

public abstract class AbstractData<TProduct> 
    where TProduct : Product
{
    public abstract IList<User> Users { get; }
    
    public abstract IList<IdentityRole<Guid>> Roles { get; }
    
    public abstract IList<IdentityUserRole<Guid>> UserRoles { get; }
    
    public abstract IList<TProduct> Products { get; }
    
    public abstract IList<Cart> Carts { get; }
    
    public abstract IList<Sale> Sales { get; }
    
    public abstract IList<News> News { get; }
    
    public abstract IList<CartProduct> CartProducts { get; }
}