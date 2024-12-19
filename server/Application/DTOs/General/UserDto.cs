namespace Application.DTOs.General;

public sealed class UserDto
{
    public Guid Id { get; set; }
    
    public string UserName { get; set; }
    
    public string Email { get; set; }
}