using Application.DTOs.General;
using Domain.Enums;

namespace Application.DTOs.GameStore;

public sealed class GamerProductDto: ProductDto
{
    public GamerProductType Type { get; set; }
}