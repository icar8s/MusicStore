using Application.Common;
using Application.DTOs.General;
using Application.Interfaces.Services.GamerStore;
using Domain.Entities.General;
using Shared.Interfaces;

namespace Infrastructure.Services.GamerStore;

public class GamerNewsService: IGamerNewsService
{
    public Task<IPaginatedResult<NewsDto>> GetNewsAsync(PageIndex page,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IResult<Guid>> CreateAsync(News news,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}