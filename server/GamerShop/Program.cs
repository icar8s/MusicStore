using Domain.Enums;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

builder.Services.Configure<RouteOptions>(options =>
{
    options.ConstraintMap.Add("gpt", typeof(GamerProductType));
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.Run();