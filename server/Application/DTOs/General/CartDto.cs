namespace Application.DTOs.General;

public sealed class CartDto<TProduct> where TProduct : ProductShortDto
{
    public List<TProduct> Products { get; set; }
}