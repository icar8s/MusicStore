using Domain.Entities.Abstract;

namespace Domain.Entities.General;

public sealed class News: EventInfEntity
{
    public string Name { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;
    
    public string BlobId { get; set; } = string.Empty;
}