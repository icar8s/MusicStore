using Domain.Entities.Abstract;
using Domain.Entities.General.Links;

namespace Domain.Entities.General;

public abstract class Product: EventInfEntity
{
    public string Name { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public decimal Price { get; set; } = 0;
    
    public uint Quantity { get; set; } = 0;
    
    public string BlobId { get; set; } = string.Empty;
    
    public virtual List<CartProduct> Products { get; set; }
    
    public virtual Sale? Sale { get; set; }
}