using Application.Interfaces;
using Domain.Entities.GamerStore;
using Domain.Entities.General;
using Domain.Entities.MusicStore;
using IdentityServer.Misc.ContextFactory;
using Microsoft.AspNetCore.Identity;
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
            .AddScoped<IContextFactory, CtxFactory>()
            .AddIdentities(configuration)
            .AddDbInitializer()
            .AddIdentityConfigurations()
            .AddIdentityServerContexts(configuration);
    
    private static IServiceCollection AddIdentities(this IServiceCollection services,
        IConfiguration configuration) =>
        services
            .AddDbContext<MusicStoreContext>(options => 
                options.UseNpgsql(configuration.GetConnectionString("musicDb")))
            .AddDbContext<GameStoreContext>(options =>
                options.UseNpgsql(configuration.GetConnectionString("gamerDb")));

    private static IServiceCollection AddIdentityConfigurations(this IServiceCollection services)
    {
        services.AddIdentity<User, IdentityRole<Guid>>()
            .AddRoleStore<DynamicRoleStore>()
            .AddUserStore<DynamicUserStore>()
            .AddDefaultTokenProviders();
        
        return services;
    }
    
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
            })
            .AddDeveloperSigningCredential()
            .AddAspNetIdentity<User>();
        
        return services;
    }
}