using System.Linq;
using AutoMapper;
using BukaScore.Models;

namespace BukaScore.Dtos.Profiles
{
    public class OrganisationProfile : Profile
    {
        public OrganisationProfile() 
        {
            CreateMap<Organisation, OrganisationDto>();
        }
    }
}