using System.Reflection;
using System.Text.Json;
using Entities;
using Entities.OrderAggregate;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context)
        {
            Console.WriteLine("SeedAsync called!!!!!!!");
            var path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

            if (!context.ProductBrands.Any())
            {
                var brandsData = File.ReadAllText(path + @"/Data/SeedData/brands.json");
                var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);
                context.ProductBrands.AddRange(brands);
            }

            if (!context.ProductTypes.Any())
            {
                var typesData = File.ReadAllText(path + @"/Data/SeedData/types.json");
                var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);
                context.ProductTypes.AddRange(types);
            }

            if (!context.Products.Any())
            {
                var productsData = File.ReadAllText(path + @"/Data/SeedData/products.json");
                var products = JsonSerializer.Deserialize<List<Product>>(productsData);
                context.Products.AddRange(products);
            }

            if (!context.DeliveryMethods.Any())
            {
                var deliveryData = File.ReadAllText(path + @"/Data/SeedData/delivery.json");
                var methods = JsonSerializer.Deserialize<List<DeliveryMethod>>(deliveryData);
                context.DeliveryMethods.AddRange(methods);
            }

            if (context.ChangeTracker.HasChanges()) await context.SaveChangesAsync();
        }

        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            Console.WriteLine("SeedUsersAsync!!!!!!!");

            if (await userManager.Users.AnyAsync()) return;

            var user = new AppUser
            {
                DisplayName = "George",
                Email = "george@test.com",
                UserName = "george@test.com",
                Address = new Address
                {
                    FirstName = "George",
                    LastName = "Giourmetakis",
                    Street = "Alexandrou 58",
                    City = "Athens",
                    State = "Attica",
                    Zipcode = "15847"
                }
            };

            var response = await userManager.CreateAsync(user, "123456");
            Console.WriteLine(response);
            Console.WriteLine(user.Id.GetType());
            Console.WriteLine(user.Id);

        }
    }
}