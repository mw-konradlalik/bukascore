using System.Linq;
using AutoMapper;
using BukaScore.Models;

namespace BukaScore.Dtos.Profiles
{
    public class TournamentProfile : Profile
    {
        public TournamentProfile() 
        {
            CreateMap<Tournament, TournamentDto>()
                .ForMember(dest => dest.Teams, o => o.MapFrom(source => source.Teams.Select(t => t.Team)));
        }
    }
}