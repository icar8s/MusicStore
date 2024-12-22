using MusicStore.Misc;
using Domain.Options;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

builder.Services.Configure<BlobOptions>(
    builder.Configuration.GetSection(BlobOptions.Name));

builder.Services
    .AddApplicationLayer()
    .AddInfrastructureLayer(builder.Configuration)
    .AddPersistenceLayer(builder.Configuration);
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
app.UseCors("AllowAll");
app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();

