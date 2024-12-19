namespace Application.Interfaces.Services;

public interface IEmailService
{
    Task SendAsync(string receiver, string subject, string message);
}