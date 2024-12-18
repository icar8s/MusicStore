using Domain.Entities.Abstract;

namespace Domain.Entities.General.Links;

public class CartProduct : BaseEntity
{
    public virtual Product? Product { get; set; }
    
    public Guid ProductId { get; set; }
    
    public virtual Cart? Cart { get; set; }
    
    public Guid CartId { get; set; }
    
    public uint Amount { get; set; }
}