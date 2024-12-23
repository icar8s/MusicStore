using Application.DTOs.General;
using Domain.Enums;

namespace Application.DTOs.MusicStore;

public sealed class MusicProductShortDto: ProductShortDto
{
    public MusicProductType Type { get; set; }
}