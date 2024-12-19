namespace Domain.Options;

public class BlobOptions
{
    public const string Name = "BlobOptions";
    
    public string ConnectionString { get; set; } = string.Empty;
    
    public string ContainerName { get; set; } = string.Empty;
}