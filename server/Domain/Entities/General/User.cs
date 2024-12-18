using Microsoft.AspNetCore.Identity;

namespace Domain.Entities.General;

public class User : IdentityUser<Guid>
{
    public decimal Balance { get; set; }
    
    public virtual Cart? Cart { get; set; }
}