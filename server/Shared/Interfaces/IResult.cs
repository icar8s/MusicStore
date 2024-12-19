namespace Shared.Interfaces;

public interface IResult<out T>
{
    bool IsSucceeded { get; }
    
    T? Data { get; }
}