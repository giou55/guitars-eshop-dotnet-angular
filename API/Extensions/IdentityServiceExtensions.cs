using System.Text;
using Entities;
using Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace API.Extensions
{
    public static class IdentityServiceExtensions
    {
        public static IServiceCollection AddIdentityServices(
            this IServiceCollection services,
            IConfiguration config)
        {
            // services.AddDbContext<StoreContext>(options =>
            // {
            //     //options.UseSqlite(config.GetConnectionString("IdentityConnection"));
            //     options.UseNpgsql(config.GetConnectionString("DefaultConnection"));
            // });

            services.AddIdentityCore<AppUser>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 6;
                options.User.AllowedUserNameCharacters =
                    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-.@_ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω";
            })
            .AddEntityFrameworkStores<StoreContext>()
            .AddSignInManager<SignInManager<AppUser>>();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey  = new SymmetricSecurityKey(
                            Encoding.UTF8.GetBytes(config["TokenKey"])),
                        ValidIssuer = config["TokenIssuer"],
                        ValidateIssuer = true,
                        ValidateAudience = false
                    };
                });


            services.AddAuthorization();

            return services;
        }
    }
}