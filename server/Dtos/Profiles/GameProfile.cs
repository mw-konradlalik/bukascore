using System.Linq;
using AutoMapper;
using BukaScore.Models;

namespace BukaScore.Dtos.Profiles
{
    public class GameProfile : Profile
    {
        public GameProfile() 
        {
            CreateMap<Game, GameDto>();
        }
    }
}