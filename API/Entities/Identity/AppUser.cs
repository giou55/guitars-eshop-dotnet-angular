using Microsoft.AspNetCore.Identity;

namespace Entities
{
    public class AppUser : IdentityUser<int>
    {
        public string DisplayName { get; set; }
        public int AddressId { get; set; }
        public Address Address { get; set; }
    }
}