using Shared.Interfaces;

namespace Shared;

public sealed class Result<T>: IResult<T> 
{
    public static Result<T> Success(T? data = default) =>
        new ()
        {
            Data = data,
            IsSucceeded = true
        };

    public static Result<T> Failure(T? data = default) =>
        new ()
        {
            Data = data,
            IsSucceeded = false
        };
    
    public bool IsSucceeded { get; private init; }
    
    public T? Data { get; private init;}
}