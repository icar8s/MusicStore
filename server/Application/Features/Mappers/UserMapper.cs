using Application.DTOs.General;
using Domain.Entities.General;
using Mapster;

namespace Application.Features.Mappers;

public sealed class UserMapper: IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.ForType<User, UserDto>();
    }
}