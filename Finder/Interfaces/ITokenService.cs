using Finder.Entities;

namespace Finder.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
