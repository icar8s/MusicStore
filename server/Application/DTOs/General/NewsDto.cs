namespace Application.DTOs.General;

public sealed class NewsDto
{
    public string Name { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;
    
    public string Base64Image { get; set; } = String.Empty;
}