using Application.DTOs.General;
using Domain.Enums;

namespace Application.DTOs.MusicStore;

public sealed class MusicProductDto : ProductDto
{
    public MusicProductType Type { get; set; }
}