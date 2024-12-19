using Application.Interfaces;
using Domain.Entities.GamerStore;
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
        services;
    
    private static IServiceCollection AddMusicIdentities(this IServiceCollection services,
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
}