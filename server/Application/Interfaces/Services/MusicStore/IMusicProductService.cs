using Application.Common;
using Application.DTOs.MusicStore;
using Domain.Enums;
using Shared.Interfaces;

namespace Application.Interfaces.Services.MusicStore;

public interface IMusicProductService
{
    Task<IResult<MusicProductDetailDto>> GetMusicProductAsync(Guid id,
        CancellationToken cancellationToken = default);
    
    Task<IPaginatedResult<MusicProductShortDto>> GetMusicProductsAsync(PageIndex page,
        CancellationToken cancellationToken = default);
    
    Task<IPaginatedResult<MusicProductShortDto>> GetMusicProductsByTypeAsync(PageIndex page,
        MusicProductType musicProductType,
        CancellationToken cancellationToken = default);
    
    Task<IResult<Guid>> AddMusicProductAsync(MusicProductDto musicProduct,
        CancellationToken cancellationToken = default);
    
    Task<IResult<bool>> UpdateMusicProductAsync(MusicProductDto musicProduct,
        CancellationToken cancellationToken = default);
    
    Task<IResult<bool>> DeleteMusicProductAsync(Guid id,
        CancellationToken cancellationToken = default);
}