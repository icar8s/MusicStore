using System.IdentityModel.Tokens.Jwt;
using System.Reflection;
using System.Security.Claims;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services;
using Application.Interfaces.Services.GamerStore;
using Application.Interfaces.Services.MusicStore;
using Domain.Entities.GamerStore;
using Domain.Entities.General;
using Domain.Entities.General.Links;
using Domain.Entities.MusicStore;
using Domain.Enums;
using FluentValidation;
using Infrastructure.Services;
using Infrastructure.Services.GamerStore;
using Infrastructure.Services.MusicStore;
using Mapster;
using MapsterMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Azure;
using Microsoft.Extensions.Caching.StackExchangeRedis;
using Microsoft.IdentityModel.Tokens;
using MusicStore.Constraints;
using Persistence.Contexts;
using Persistence.Repositories;
using ZiggyCreatures.Caching.Fusion;
using ZiggyCreatures.Caching.Fusion.Serialization.SystemTextJson;

namespace MusicStore.Misc;

internal static class ServiceExtensions
{
    internal static IServiceCollection AddApplicationLayer(this IServiceCollection services)
        => services
            .AddMapsterFromAssembly()
            .AddValidatorsFromAssembly(Assembly.GetExecutingAssembly())
            .Configure<RouteOptions>(options =>
            {
                options.ConstraintMap.Add("mpt", typeof(MusicProductTypeConstraint));
            });
    
    private static IServiceCollection AddMapsterFromAssembly(this IServiceCollection services)
    {
        var typeAdapterConfig = TypeAdapterConfig.GlobalSettings;
        typeAdapterConfig.Scan(Assembly.GetExecutingAssembly());
        var mapperConfig = new Mapper(typeAdapterConfig);
        return  services.AddSingleton<IMapper>(mapperConfig);
    }
    
    internal static IServiceCollection AddInfrastructureLayer(this IServiceCollection services,
        IConfiguration configuration)
        => services
            .AddServices()
            .AddIdentities()
            .AddAuthentication(configuration);

    private static IServiceCollection AddServices(this IServiceCollection services) =>
        services
            .AddScoped<IIdentityService, IdentityService>()
            .AddScoped<IMusicCartService, MusicCartService>()
            .AddScoped<IMusicNewsService, MusicNewsService>()
            .AddScoped<IMusicProductService, MusicProductService>();
    
    private static IServiceCollection AddIdentities(this IServiceCollection services)
    {
        services.AddDefaultIdentity<User>()
            .AddRoles<IdentityRole<Guid>>()
            .AddEntityFrameworkStores<MusicStoreContext>()
            .AddUserManager<UserManager<User>>()
            .AddRoleManager<RoleManager<IdentityRole<Guid>>>()
            .AddDefaultTokenProviders();
        return services;
    }
    
    private static IServiceCollection AddAuthentication(this IServiceCollection services,
        IConfiguration configuration,
        string audience = "api")
    {
        JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();
        var identityUrl = configuration.GetConnectionString("identity");

        services.AddAuthentication(options =>
        {
            options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        }).AddJwtBearer(options =>
        {
            options.Authority = identityUrl;
            options.RequireHttpsMetadata = false;
            options.Audience = audience;
        });

        return services;
    }
    
    internal static IServiceCollection AddPersistenceLayer(this IServiceCollection services,
        IConfiguration configuration)
        => services
            .AddAzurite(configuration)
            .AddDbContext(configuration)
            .AddRepositories()
            .AddCache(configuration);

    private static IServiceCollection AddAzurite(this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddAzureClients(clientBuilder =>
        {
            clientBuilder.AddBlobServiceClient(configuration.GetConnectionString("azurite"));
        });
        return services;
    }
    
    private static IServiceCollection AddDbContext(this IServiceCollection services,
        IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("entityDb");

        return services.AddDbContext<MusicStoreContext>(options =>
        {
            options.UseNpgsql(connectionString,
                builder => builder.MigrationsAssembly(typeof(MusicStoreContext).Assembly.FullName));
            options.UseLazyLoadingProxies();
        });
    }

    private static IServiceCollection AddRepositories(this IServiceCollection services) =>
        services
            .AddScoped<IRepository<Product>, Repository<Product, MusicStoreContext>>()
            .AddScoped<IRepository<Sale>, Repository<Sale, MusicStoreContext>>()
            .AddScoped<IRepository<SaleProduct>, Repository<SaleProduct, MusicStoreContext>>()
            .AddScoped<IRepository<CartProduct>, Repository<CartProduct, MusicStoreContext>>()
            .AddScoped<IRepository<News>, Repository<News, MusicStoreContext>>()
            .AddScoped<IRepository<Cart>, Repository<Cart, MusicStoreContext>>()
            .AddScoped<IRepository<MusicProduct>, Repository<MusicProduct, MusicStoreContext>>()
            .AddScoped<ICartProductRepository, CartProductRepository<MusicStoreContext>>()
            .AddScoped<ICartRepository, CartRepository<MusicStoreContext>>();

    private static IServiceCollection AddCache(this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddFusionCache()
            .WithDefaultEntryOptions(new FusionCacheEntryOptions
            {
                FactorySoftTimeout = TimeSpan.FromMilliseconds(100),
                FactoryHardTimeout = TimeSpan.FromMilliseconds(1500)
            })
            .WithSerializer(
                new FusionCacheSystemTextJsonSerializer()
            )
            .WithDistributedCache(
                new RedisCache(new RedisCacheOptions()
                    {Configuration = configuration.GetConnectionString("redis")}
                )
            );
        return services;
    }
}