var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.MapGet("/api/health", () => Results.Ok(new
{
    status = "ok",
    service = "portfolio-api",
    utc = DateTime.UtcNow
}));

app.Run();
