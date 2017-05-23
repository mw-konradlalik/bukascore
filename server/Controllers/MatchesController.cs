using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using BukaScore.Dtos;
using BukaScore.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BukaScore.Controllers
{
    [Route("api/[controller]")]
    public class MatchesController : Controller
    {
        private ApplicationDbContext dbContext;
        private IMapper mapper;

        public MatchesController(ApplicationDbContext dbContext, IMapper mapper)
        {
            this.dbContext = dbContext;
            this.mapper = mapper;
        }

        [HttpGet("tournament/{tournamentId}")]
        public IList<MatchDto> Get(int tournamentId)
        {
            return dbContext.Matches
                .Where(m => m.TournamentId == tournamentId)
                .ProjectTo<MatchDto>().ToList();
        }

        // GET api/values
        

        // [HttpGet("tournement/{tournamentId}")]
        // public TeamTournamentResultDto GetTeamStats()
        // {
        //     return dbContext.Tournaments.Where(t => t.Id == tournamentId)
        //         ;
        // }

    }
}
