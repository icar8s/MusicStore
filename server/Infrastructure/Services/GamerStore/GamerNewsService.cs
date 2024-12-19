using Application.Common;
using Application.DTOs.General;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services.GamerStore;
using Domain.Entities.General;
using Mapster;
using MapsterMapper;
using Persistence.Contexts;
using Persistence.Repositories;
using Shared;
using Shared.Interfaces;

namespace Infrastructure.Services.GamerStore;

public class GamerNewsService(IRepository<News> repository,
    IMapper mapper): IGamerNewsService
{
    public async Task<IPaginatedResult<NewsDto>> GetNewsAsync(PageIndex page,
        CancellationToken cancellationToken = default)
        =>  await repository.Entities
            .OrderBy(x=>x.LastModifiedDate)
            .ProjectToType<NewsDto>(mapper.Config)
            .ToPaginatedListAsync(page.PageNumber, page.PageSize, cancellationToken);

    public Task<IResult<Guid>> CreateAsync(NewsDto news,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}