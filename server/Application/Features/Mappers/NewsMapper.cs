using Application.DTOs.General;
using Domain.Entities.General;
using Mapster;

namespace Application.Features.Mappers;

public sealed class NewsMapper: IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.ForType<News, NewsDto>()
            .TwoWays();
    }
}