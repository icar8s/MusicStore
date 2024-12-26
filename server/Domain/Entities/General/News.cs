using Domain.Entities.Abstract;

namespace Domain.Entities.General;

public class News: EventInfEntity
{
    public string Name { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;
    
    public string Base64Image { get; set; } = string.Empty;
}