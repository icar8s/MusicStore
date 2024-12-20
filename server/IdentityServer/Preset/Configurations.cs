using Duende.IdentityServer;
using Duende.IdentityServer.Models;
using IdentityModel;

namespace IdentityServer.Preset;

internal static class Configurations
{
    internal static List<Client> GetClients()
    {
        return
        [
            new Client
            {
                ClientId = "Api",
                ClientName = "Api",
                ClientSecrets = { new Secret("client_secret".ToSha256()) },
                AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,
                AbsoluteRefreshTokenLifetime = 1,
                SlidingRefreshTokenLifetime = 1,
                AllowOfflineAccess = true,
                AllowedScopes =
                {
                    IdentityServerConstants.StandardScopes.OpenId,
                    IdentityServerConstants.StandardScopes.Profile,
                    IdentityServerConstants.StandardScopes.Email,
                    "api"
                },
                RefreshTokenUsage = TokenUsage.ReUse
            }
        ];
    }
    
    internal static List<ApiScope> GetApiScopes()
    {
        return
        [
            new ApiScope
            {
                Name = "api",
                DisplayName = "api",
                Enabled = true,
                UserClaims =
                {
                    JwtClaimTypes.Name,
                    JwtClaimTypes.Email,
                    JwtClaimTypes.Subject,
                    JwtClaimTypes.Role,
                    JwtClaimTypes.Address,
                    JwtClaimTypes.Confirmation,
                    JwtClaimTypes.EmailVerified,
                    JwtClaimTypes.Id,
                    JwtClaimTypes.Profile
                }
            }
        ];
    }

    internal static List<ApiResource> GetApiResources()
    {
        return [new ApiResource("api", "api") { Scopes = new List<string> { "api" } }];
    }
    
    internal static List<IdentityResource> GetIdentityResources()
    {
        return
        [
            new IdentityResources.OpenId(),
            new IdentityResources.Profile(),
            new IdentityResources.Email()
        ];
    }
}