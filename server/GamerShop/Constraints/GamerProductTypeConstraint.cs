using Domain.Enums;

namespace GamerShop.Constraints;

public class GamerProductTypeConstraint: IRouteConstraint
{
    public bool Match(HttpContext? httpContext, IRouter? route, string routeKey, RouteValueDictionary values, RouteDirection routeDirection)
    {
        if (!values.TryGetValue(routeKey, out var value) || value is not string stringValue)
        {
            return false;
        }
        
        return Enum.TryParse(typeof(GamerProductType), stringValue, true, out _);
    }
}