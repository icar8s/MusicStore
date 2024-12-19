using Application.Common;
using Application.DTOs.General;
using Application.Interfaces.Services.MusicStore;
using Domain.Entities.General;
using Mapster;
using MapsterMapper;
using Persistence.Contexts;
using Persistence.Repositories;
using Shared;
using Shared.Interfaces;

namespace Infrastructure.Services.MusicStore;

public class MusicNewsService(Repository<News, MusicStoreContext> repository,
    IMapper mapper): IMusicNewsService
{
    public async Task<IPaginatedResult<NewsDto>> GetNewsAsync(PageIndex page,
        CancellationToken cancellationToken = default)
    {
        return await repository.Entities
            .OrderBy(x=>x.LastModifiedDate)
            .ProjectToType<NewsDto>(mapper.Config)
            .ToPaginatedListAsync(page.PageNumber, page.PageSize, cancellationToken);
    }

    public async Task<IResult<Guid>> CreateAsync(NewsDto news,
        CancellationToken cancellationToken = default)
    {
        var entity = mapper.Map<News>(news);
        
        var id = await repository.CreateAsync(entity, cancellationToken);
        
        return Result<Guid>.Success(id);
    }
}