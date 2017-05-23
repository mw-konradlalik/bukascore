using System.Linq;
using AutoMapper;
using BukaScore.Models;

namespace BukaScore.Dtos.Profiles
{
    public class MatchProfile : Profile
    {
        public MatchProfile() 
        {
            CreateMap<Match, MatchDto>()
            .ForMember(dest => dest.HomeTeamId, o => o.MapFrom(source => source.HomeId))
            .ForMember(dest => dest.HomeTeamName, o => o.MapFrom(source => source.Home.Name))
            .ForMember(dest => dest.AwayTeamId, o => o.MapFrom(source => source.AwayId))
            .ForMember(dest => dest.AwayTeamName, o => o.MapFrom(source => source.Away.Name))
            ;
        }
    }
}