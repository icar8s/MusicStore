using IdentityServer.Misc;
using IdentityServer.Preset;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddIdentityCors();
builder.Services.AddPersistenceLayer(builder.Configuration);
builder.Services.ConfigureIdentity();
builder.Services.AddIdentityServerContexts(builder.Configuration);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseIdentityDbInitializer();
    app.UseDbInitializer();
    app.MapOpenApi();
}

app.UseCorsWithPolicy();
app.UseHttpsRedirection();
app.UseRouting();
app.UseIdentityServer();
app.UseAuthorization();
app.MapControllers();

app.Run();

