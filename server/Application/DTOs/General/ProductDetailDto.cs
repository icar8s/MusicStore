namespace Application.DTOs.General;

public abstract class ProductDetailDto
{
    public Guid Id { get; set; }
    
    public string Name { get; set; } = string.Empty;
    
    public decimal Price { get; set; } = 0;
    
    public uint Quantity { get; set; } = 0;
    
    public string Base64Image { get; set; } = String.Empty;
    
    public string Description { get; set; } = string.Empty;
    
    public SaleDto? Sale { get; set; } = null;
}