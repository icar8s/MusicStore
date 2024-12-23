namespace Domain.Options;

public class BlobOptions
{
    public const string Name = "BlobOptions";
    public string ContainerName { get; set; } = string.Empty;
}