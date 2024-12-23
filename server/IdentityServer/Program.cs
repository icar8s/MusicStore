using IdentityServer.Misc;
using IdentityServer.Preset;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddIdentityCors();
builder.Services.AddPersistenceLayer(builder.Configuration);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
app.UseIdentityDbInitializer();
app.UseDbInitializer();

app.UseCors("AllowAll");
app.UseCorsWithPolicy();
app.UseHttpsRedirection();
app.UseRouting();
app.UseIdentityServer();
app.UseAuthorization();
app.MapControllers();

app.Run();

