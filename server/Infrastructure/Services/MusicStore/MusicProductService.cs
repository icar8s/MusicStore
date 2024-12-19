using Application.Common;
using Application.DTOs.MusicStore;
using Application.Interfaces.Services.MusicStore;
using Domain.Enums;
using Shared.Interfaces;

namespace Infrastructure.Services.MusicStore;

public class MusicProductService: IMusicProductService
{
    public Task<IResult<MusicProductDetailDto>> GetMusicProductAsync(Guid id,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IPaginatedResult<MusicProductShortDto>> GetMusicProductsAsync(PageIndex page,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IPaginatedResult<MusicProductShortDto>> GetMusicProductsByTypeAsync(PageIndex page,
        MusicProductType musicProductType,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IResult<Guid>> AddMusicProductAsync(MusicProductDto musicProduct,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IResult<bool>> UpdateMusicProductAsync(MusicProductDto musicProduct,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IResult<bool>> DeleteMusicProductAsync(Guid id,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}