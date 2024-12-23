using Domain.Enums;

namespace MusicStore.Constraints;

internal class MusicProductTypeConstraint : IRouteConstraint
{
    public bool Match(HttpContext? httpContext, IRouter? route, string routeKey, RouteValueDictionary values, RouteDirection routeDirection)
    {
        if (!values.TryGetValue(routeKey, out var value) || value is not string stringValue)
        {
            return false;
        }
        
        return Enum.TryParse(typeof(MusicProductType), stringValue, true, out _);
    }
}