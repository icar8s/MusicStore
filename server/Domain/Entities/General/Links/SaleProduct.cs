using Domain.Entities.Abstract;

namespace Domain.Entities.General.Links;

public class SaleProduct: BaseEntity
{
    public Guid ProductId { get; set; }
    
    public virtual Product? Product { get; set; }
    
    public Guid SaleId { get; set; }
    
    public virtual Sale? Sale { get; set; }
}