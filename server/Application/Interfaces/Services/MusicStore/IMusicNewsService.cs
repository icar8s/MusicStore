using Application.Common;
using Application.DTOs.General;
using Shared.Interfaces;

namespace Application.Interfaces.Services.MusicStore;

public interface IMusicNewsService
{
    Task<IPaginatedResult<NewsDto>> GetNewsAsync(PageIndex page,
        CancellationToken cancellationToken = default);
    
    Task<IResult<Guid>> CreateAsync(NewsDto news,
        CancellationToken cancellationToken = default);
}