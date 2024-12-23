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
        if(blobServiceClient.GetBlobContainerClient(blobOptions.Value.ContainerName) == null)
        {
            await blobServiceClient.CreateBlobContainerAsync(blobOptions.Value.ContainerName, cancellationToken: cancellationToken);
        }
        
        var blobContainerClient = blobServiceClient.GetBlobContainerClient(blobOptions.Value.ContainerName);
        
        var blobClient = blobContainerClient.GetBlobClient($"{news.Name}.txt");
        
        var data =  Convert.FromBase64String(news.Base64Image);
        
        var binaryData = new BinaryData(data);
        
        await blobClient.UploadAsync(binaryData, cancellationToken: cancellationToken);
        
        var newsEntity = mapper.Map<News>(news);

        newsEntity.BlobId = $"{blobClient.Uri}/{news.Name}.txt";
        
        var id = await repository.CreateAsync(newsEntity, cancellationToken);

        return Result<Guid>.Success(id);
    }
}