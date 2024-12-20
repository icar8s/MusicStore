using Application.DTOs.GameStore;
using Domain.Entities.GamerStore;
using Mapster;

namespace Application.Features.Mappers;

public sealed class GamerProductMapper: IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.ForType<GamerProduct, GamerProductShortDto>();
        
        config.ForType<GamerProduct, GamerProductDetailDto>();
        
        config.ForType<GamerProductDto, GamerProduct>();
    }
}