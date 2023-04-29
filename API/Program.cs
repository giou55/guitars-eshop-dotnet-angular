using API.Extensions;
using API.Middleware;
using Entities;
using Data;
using Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using StackExchange.Redis;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);
builder.Services.AddSwaggerDocumentation();


// we add this code for deploying our app to fly.io
// and remove some code from ApplicationServiceExtension.cs

// Connection string: postgres://postgres:JobC9KmW0gxQJTW@guitars-eshop-db.internal:5432
var postgresConnString = "";

if (builder.Environment.IsDevelopment())
    postgresConnString = builder.Configuration.GetConnectionString("DefaultConnection");
else
{
// Use connection string provided at runtime by Fly.io.
    var connUrl = Environment.GetEnvironmentVariable("DATABASE_URL");

    // Parse connection URL to connection string for Npgsql
    connUrl = connUrl.Replace("postgres://", string.Empty);
    var pgUserPass = connUrl.Split("@")[0];
    var pgHostPortDb = connUrl.Split("@")[1];
    var pgHostPort = pgHostPortDb.Split("/")[0];
    var pgDb = pgHostPortDb.Split("/")[1];
    var pgUser = pgUserPass.Split(":")[0];
    var pgPass = pgUserPass.Split(":")[1];
    var pgHost = pgHostPort.Split(":")[0];
    var pgPort = pgHostPort.Split(":")[1];

    postgresConnString = $"Server={pgHost};Port={pgPort};User Id={pgUser};Password={pgPass};Database={pgDb};";
}

builder.Services.AddDbContext<StoreContext>(opt =>
{
    opt.UseNpgsql(postgresConnString);
});

var redisConnString = "";

if (builder.Environment.IsDevelopment())
    redisConnString = builder.Configuration.GetConnectionString("Redis");
else
{
    //redisConnString = "redis://:1744744d01be49ccbbf0440afeb1702d@fly-guitars-eshop.upstash.io:6379";
    //redisConnString = "default:1744744d01be49ccbbf0440afeb1702d@fly-guitars-eshop.upstash.io:6379";
    //redisConnString = "fly-guitars-eshop.upstash.io:6379,ssl=true,password=1744744d01be49ccbbf0440afeb1702d";
    //redisConnString = "redis.internal:6379";
    //redisConnString = "localhost:6379";
    redisConnString = "fly-guitars-eshop.upstash.io:6379,password=1744744d01be49ccbbf0440afeb1702d,ssl=True,abortConnect=False,sslprotocols=tls12";
}

builder.Services.AddSingleton<IConnectionMultiplexer>(c =>
{
    return ConnectionMultiplexer.Connect(redisConnString);
    // return ConnectionMultiplexer.Connect(new ConfigurationOptions{
    //             EndPoints = {"redis://default:1744744d01be49ccbbf0440afeb1702d@fly-guitars-eshop.upstash.io:6379"},
    //});
});
// end of code to add for deploy to fly.io


// var connString = builder.Configuration.GetConnectionString("DefaultConnection");
// builder.Services.AddDbContext<StoreContext>(options =>
// {
//     //options.UseSqlite(config.GetConnectionString("DefaultConnection"));
//     options.UseNpgsql(connString);
// });

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseMiddleware<ExceptionMiddleware>();

app.UseStatusCodePagesWithReExecute("/errors/{0}");

app.UseSwaggerDocumentation();

app.UseStaticFiles();

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "Content")), RequestPath = "/Content"
});

// app.UseCors("CorsPolicy");

// app.UseCors(policy => {
//     policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200");
//     policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:8080");
// });

app.UseCors(builder => {
    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
});

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapFallbackToController("Index", "Fallback");

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

var context = services.GetRequiredService<StoreContext>();
//var identityContext = services.GetRequiredService<AppIdentityDbContext>();
var userManager = services.GetRequiredService<UserManager<AppUser>>();
var logger = services.GetRequiredService<ILogger<Program>>();

try
{
    await context.Database.MigrateAsync();
    //await identityContext.Database.MigrateAsync();
    await StoreContextSeed.SeedAsync(context);
    //await AppIdentityDbContextSeed.SeedUsersAsync(userManager);
    await StoreContextSeed.SeedUsersAsync(userManager);
}
catch (Exception ex)
{
    logger.LogError(ex, "An error occured during migration");
}

app.Run();
