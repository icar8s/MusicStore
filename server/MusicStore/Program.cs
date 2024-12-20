using Domain.Enums;
using Domain.Options;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

builder.Services.Configure<BlobOptions>(
    builder.Configuration.GetSection(BlobOptions.Name));

builder.Services.Configure<RouteOptions>(options =>
{
    options.ConstraintMap.Add("mpt", typeof(MusicProductType));
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.Run();

