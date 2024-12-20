namespace Application.Interfaces;

public interface IDbInitializer<in TData>
{
    Task InitializeAsync(TData data,
        CancellationToken cancellationToken = default);
    
    void Initialize(TData data);
}