using Application.DTOs.General;
using Domain.Enums;

namespace Application.DTOs.MusicStore;

public sealed class MusicProductDetailDto: ProductDetailDto
{
    public MusicProductType Type { get; set; }
}