using Application.Interfaces;
using Domain.Entities.GamerStore;
using Domain.Entities.General;
using Domain.Entities.MusicStore;
using Microsoft.EntityFrameworkCore;
using Persistence.Contexts;
using Persistence.SeedData;
using Persistence.SeedData.FakeData;

namespace IdentityServer.Misc;

internal static class ServiceExtensions
{
    internal static IServiceCollection AddPersistenceLayer(this IServiceCollection services,
        IConfiguration configuration) =>
        services
            .AddIdentities(configuration)
            .AddDbInitializer()
            .AddIdentityServerContexts(configuration);
    
    private static IServiceCollection AddIdentities(this IServiceCollection services,
        IConfiguration configuration) =>
        services
            .AddDbContext<MusicStoreContext>(options => 
                options.UseNpgsql(configuration.GetConnectionString("musicDb")))
            .AddDbContext<GameStoreContext>(options =>
                options.UseNpgsql(configuration.GetConnectionString("gameDb")));

    private static IServiceCollection AddDbInitializer(this IServiceCollection services)
        => services
            .AddScoped<IDbInitializer<GamerStoreData>,
                DbInitializer<GameStoreContext,GamerStoreData,GamerProduct>>()
            .AddScoped<IDbInitializer<MusicStoreData>, 
                DbInitializer<MusicStoreContext,MusicStoreData,MusicProduct>>();
    
    private static IServiceCollection AddIdentityServerContexts(this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddIdentityServer(options => { options.UserInteraction.LoginUrl = null; })
            .AddConfigurationStore(options =>
            {
                options.ConfigureDbContext = context =>
                    context.UseNpgsql(configuration.GetConnectionString("configurationDb"),
                        migration => migration.MigrationsAssembly(typeof(Program).Assembly.FullName));
            })
            .AddOperationalStore(options =>
            {
                options.ConfigureDbContext = context =>
                    context.UseNpgsql(configuration.GetConnectionString("operationalDb"),
                        migration => migration.MigrationsAssembly(typeof(Program).Assembly.FullName));
                options.EnableTokenCleanup = true;
                options.RemoveConsumedTokens = true;
                options.TokenCleanupInterval = 10;
            })
            .AddDeveloperSigningCredential()
            .AddAspNetIdentity<User>();
        
        return services;
    }
}