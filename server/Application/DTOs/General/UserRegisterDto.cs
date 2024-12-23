namespace Application.DTOs.General;

public sealed class UserRegisterDto
{
    public string UserName { get; set; }
    
    public string Email { get; set;}
    
    public string Password { get; set;}
    
    public string PasswordConfirmation { get;set; }
}