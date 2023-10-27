using Finder.DTOs;
using Finder.Entities;
using Finder.Helpers;

namespace Finder.Interfaces
{
    public interface ILikesRepository
    {
        Task<UserLike> GetUserLike(int sourceUserId, int likedUserId);
        Task<AppUser> GetUserWithLikes(int userId);
        Task<IEnumerable<LikeDto>> GetUserLikes(string predicate, int userId);
        //Task<PagedList<LikeDto>> GetUserLikes(LikesParams likesParams);
    }
}
