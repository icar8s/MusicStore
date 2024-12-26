using Application.Common;
using Application.DTOs.General;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services.MusicStore;
using Azure.Storage.Blobs;
using Domain.Entities.GamerStore;
using Domain.Entities.General;
using Domain.Options;
using Mapster;
using MapsterMapper;
using Microsoft.Extensions.Options;
using Persistence.Contexts;
using Persistence.Repositories;
using Shared;
using Shared.Interfaces;

namespace Infrastructure.Services.MusicStore;

public class MusicNewsService(IRepository<News> repository,
    BlobServiceClient blobServiceClient,
    IOptions<BlobOptions> blobOptions,
    IMapper mapper): IMusicNewsService
{
    public async Task<IPaginatedResult<NewsDto>> GetNewsAsync(PageIndex page,
        CancellationToken cancellationToken = default)
        =>   await repository.Entities
                .OrderBy(x=>x.LastModifiedDate)
                .ProjectToType<NewsDto>(mapper.Config)
                .ToPaginatedListAsync(page.PageNumber, page.PageSize, cancellationToken);

    public async Task<IResult<Guid>> CreateAsync(NewsDto news,
        CancellationToken cancellationToken = default)
    {
        
        var newsEntity = mapper.Map<News>(news);
        
        var id = await repository.CreateAsync(newsEntity, cancellationToken);

        return Result<Guid>.Success(id);
    }
}