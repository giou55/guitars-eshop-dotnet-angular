using Microsoft.AspNetCore.Identity;

namespace api.Entities
{
    // we extends AppRole class with IdentityRole because we want to use Identity
    // we add <int> because we want our Id property to be an int instead of string
    public class AppRole : IdentityRole<int>
    {

    }
}