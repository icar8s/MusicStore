using Application.DTOs.MusicStore;
using Domain.Entities.MusicStore;
using Mapster;

namespace Application.Features.Mappers;

public sealed class MusicProductMapper: IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.ForType<MusicProduct, MusicProductShortDto>();
        
        config.ForType<MusicProduct, MusicProductDetailDto>();
        
        config.ForType<MusicProductDto, MusicProduct>();
    }
}