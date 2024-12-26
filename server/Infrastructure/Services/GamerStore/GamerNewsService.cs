using Application.Common;
using Application.DTOs.General;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services.GamerStore;
using Azure.Storage.Blobs;
using Domain.Entities.General;
using Domain.Options;
using Mapster;
using MapsterMapper;
using Microsoft.Extensions.Options;
using Shared;
using Shared.Interfaces;

namespace Infrastructure.Services.GamerStore;

public class GamerNewsService(IRepository<News> repository,
    BlobServiceClient blobServiceClient,
    IOptions<BlobOptions> blobOptions,
    IMapper mapper): IGamerNewsService
{
    public async Task<IPaginatedResult<NewsDto>> GetNewsAsync(PageIndex page,
        CancellationToken cancellationToken = default)
        =>  await repository.Entities
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