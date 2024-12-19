using Shared.Interfaces;

namespace Shared;

public sealed class PaginatedResult<T> : IPaginatedResult<T>
{
    public bool IsSucceeded { get; }
    
    public List<T> Data { get; }
    
    public int CurrentPage { get; }
    
    public int TotalPages { get; }
    
    public int TotalCount { get; }
    
    public int PageSize { get; }
    
    private PaginatedResult(bool isSucceeded)
    {
        Data = new List<T>();
        IsSucceeded = isSucceeded;
    }
    
    private PaginatedResult(bool isSucceeded,
        List<T> data,
        int count = 0,
        int pageNumber = 1,
        int pageSize = 10)
    {
        Data = data;
        CurrentPage = pageNumber;
        IsSucceeded = isSucceeded;
        PageSize = pageSize;
        TotalPages = (int) Math.Ceiling(count / (double) pageSize);
        TotalCount = count;
    }

    public static PaginatedResult<T> Success(List<T> data, int count, int pageNumber, int pageSize)
        => new (true, data, count, pageNumber, pageSize);

    public static PaginatedResult<T> Failure()
        => new (false);
}