using Domain.Entities.General;
using Domain.Enums;

namespace Domain.Entities.MusicStore;

public class MusicProduct : Product
{
    public MusicProductType Type { get; set; }
}