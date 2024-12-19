using Domain.Entities.Abstract;
using Domain.Entities.General.Links;

namespace Domain.Entities.General;

public class Sale: BaseEntity
{
    public float Percentage { get; set; }
    
    public virtual List<SaleProduct> SaleProducts { get; set; }
}