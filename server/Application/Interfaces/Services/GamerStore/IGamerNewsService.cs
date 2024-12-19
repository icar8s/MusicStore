using Application.Common;
using Application.DTOs.General;
using Domain.Entities.General;
using Shared.Interfaces;

namespace Application.Interfaces.Services.GamerStore;

public interface IGamerNewsService
{
    Task<IPaginatedResult<NewsDto>> GetNewsAsync(PageIndex page,
        CancellationToken cancellationToken = default);
    
    Task<IResult<Guid>> CreateAsync(News news,
        CancellationToken cancellationToken = default);
}