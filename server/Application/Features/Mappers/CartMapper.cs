using Application.DTOs.GameStore;
using Application.DTOs.General;
using Application.DTOs.MusicStore;
using Domain.Entities.General;
using Mapster;

namespace Application.Features.Mappers;

public sealed class CartMapper: IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.ForType<Cart, CartDto<GamerProductShortDto>>()
            .Map(dest => dest.Products,
                src => src.Products.Select(x=>x.Product));
        
        config.ForType<Cart, CartDto<MusicProductShortDto>>()
            .Map(dest => dest.Products,
                src => src.Products.Select(x=>x.Product));
    }
}