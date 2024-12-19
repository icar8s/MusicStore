using Application.DTOs.General;
using Domain.Enums;

namespace Application.DTOs.GameStore;

public sealed class GamerProductShortDto: ProductShortDto
{
    public GamerProductType Type { get; set; }
}