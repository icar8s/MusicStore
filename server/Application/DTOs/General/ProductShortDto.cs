namespace Application.DTOs.General;

public abstract class ProductShortDto
{
    public Guid Id { get; set; }
    
    public string Name { get; set; } = string.Empty;
    
    public decimal Price { get; set; } = 0;
    
    public string Base64Image { get; set; } = String.Empty;
    
    public SaleDto? Sale { get; set; } = null;
}