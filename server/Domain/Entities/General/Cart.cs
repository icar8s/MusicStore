using Domain.Entities.Abstract;
using Domain.Entities.General.Links;

namespace Domain.Entities.General;

public class Cart : BaseEntity
{
    public virtual User? User { get; set; }
    
    public Guid UserId { get; set; }

    public virtual List<CartProduct> Products { get; set; }
}