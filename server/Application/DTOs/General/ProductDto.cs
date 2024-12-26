namespace Application.DTOs.General;

public abstract class ProductDto
{
    public Guid? Id { get; set; }
    public string Name { get; set; } = string.Empty;
    
    public decimal Price { get; set; } = 0;
    
    public uint Quantity { get; set; } = 0;
    
    public string Base64Image { get; set; } = String.Empty;
    
    public string Description { get; set; } = string.Empty;
    
    public SaleDto? Sale { get; set; } = null;

    public float Percentage { get; set; } = 0;
}