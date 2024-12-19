using Application.DTOs.General;
using Domain.Enums;

namespace Application.DTOs.GameStore;

public sealed class GamerProductDetailDto: ProductDetailDto
{
    public GamerProductType Type { get; set; }
}