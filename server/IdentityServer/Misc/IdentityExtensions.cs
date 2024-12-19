using Application.Interfaces;
using Domain.Entities.GamerStore;
using Domain.Entities.General;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence.Contexts;
using Persistence.SeedData.FakeData;

namespace IdentityServer.Misc;

internal static class IdentityExtensions
{
    private static readonly string Policy = "any";
    
    internal static void AddIdentityCors(this IServiceCollection services)
    {
        services.AddCors(options =>
        {
            options.AddPolicy(Policy,
                policy =>
                {
                    policy
                        .AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
        });
    }
    
    internal static void ConfigureIdentity(this IServiceCollection services)
    {
        services.AddIdentity<User, IdentityRole<Guid>>()
            .AddEntityFrameworkStores<BaseDbContext>()
            .AddRoleManager<RoleManager<IdentityRole<Guid>>>()
            .AddUserManager<UserManager<User>>()
            .AddDefaultTokenProviders();
    }
    
    internal static void AddIdentityServerContexts(this IServiceCollection services,
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
    }
    
    public static void UseDbInitializer(this IApplicationBuilder app)
    {
        using var scope = app.ApplicationServices.CreateScope();

        var musicInitializer = scope.ServiceProvider.GetRequiredService<IDbInitializer<MusicStoreData>>();

        musicInitializer.Initialize(new MusicStoreData());
        
        var gamerInitializer = scope.ServiceProvider.GetRequiredService<IDbInitializer<GamerProduct>>();
        
        gamerInitializer.Initialize(new GamerProduct());
    }
    
    internal static void UseCorsWithPolicy(this IApplicationBuilder app)
    {
        app.UseCors(Policy);
    }
}