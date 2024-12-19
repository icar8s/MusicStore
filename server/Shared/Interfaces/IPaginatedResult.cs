namespace Shared.Interfaces;

public interface IPaginatedResult<T> 
{
    bool IsSucceeded { get; }
    
    List<T> Data { get; }
    
    int CurrentPage { get; }

    int TotalPages { get; }
    
    int TotalCount { get; }
    
    int PageSize { get; }
    
    bool HasPreviousPage => CurrentPage > 1;
    
    bool HasNextPage => CurrentPage < TotalPages;
}