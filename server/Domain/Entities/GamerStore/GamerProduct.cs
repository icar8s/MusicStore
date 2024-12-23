using Domain.Entities.General;
using Domain.Enums;

namespace Domain.Entities.GamerStore;

public class GamerProduct : Product
{
    public GamerProductType Type { get; set; }
}