using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
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

                await userManager.CreateAsync(user, "123456");
            }
        }
    }
}