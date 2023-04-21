using System.Reflection;
using Entities;
using Entities.OrderAggregate;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class StoreContext : IdentityDbContext<AppUser, AppRole, int, IdentityUserClaim<int>,
        AppUserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<ProductBrand> ProductBrands { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<DeliveryMethod> DeliveryMethods { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        // protected override void OnModelCreating(ModelBuilder modelBuilder)
        // {
        //     base.OnModelCreating(modelBuilder);
        //     modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        //     if (Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite")
        //     {
        //         foreach (var entityType in modelBuilder.Model.GetEntityTypes())
        //         {
        //             var properties = entityType.ClrType.GetProperties().Where(p => p.PropertyType == typeof(decimal));

        //             foreach (var property in properties)
        //             {
        //                 modelBuilder.Entity(entityType.Name).Property(property.Name).HasConversion<double>();
        //             }
        //         }
        //     }
        // }
    }
}