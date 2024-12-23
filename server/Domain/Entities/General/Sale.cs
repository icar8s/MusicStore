using Domain.Entities.Abstract;
using Domain.Entities.General.Links;

namespace Domain.Entities.General;

public class Sale: BaseEntity
{
    public float Percentage { get; set; }
    
    public virtual Product? Product { get; set; }
    
    public Guid ProductId { get; set; }
}