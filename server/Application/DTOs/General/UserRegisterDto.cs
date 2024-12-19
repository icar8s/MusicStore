namespace Application.DTOs.General;

public sealed class UserRegisterDto
{
    public string UserName { get; }
    
    public string Email { get; }
    
    public string Password { get; }
    
    public string PasswordConfiramation { get; }
}