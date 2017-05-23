using System.Linq;
using AutoMapper;
using BukaScore.Models;

namespace BukaScore.Dtos.Profiles
{
    public class TeamProfile : Profile
    {
        public TeamProfile() 
        {
            CreateMap<Team, TeamDto>();
        }
    }
}