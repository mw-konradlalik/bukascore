

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
    public class TournamentsController : Controller
    {
        private ApplicationDbContext dbContext;
        private IMapper mapper;

        public TournamentsController(ApplicationDbContext dbContext, IMapper mapper)
        {
            this.dbContext = dbContext;
            this.mapper = mapper;
        }

        [HttpGet("{id}")]
        public TournamentDto Get(int id)
        {
            var tournament = dbContext.Tournaments
                .ProjectTo<TournamentDto>()
                .SingleOrDefault(t => t.Id == id);

            return tournament;
        }

        // GET api/values
        [HttpGet("game/{gameId}")]
        public IList<TournamentDto> GetTournamentsForGame(int gameId)
        {
            return dbContext.Tournaments.Where(t => t.GameId == gameId)
                .ProjectTo<TournamentDto>().ToList();
        }

        [HttpGet("{tournamentId}/results")]
        public IList<TeamTournamentResultDto> GetTeamTournamentResults(int tournamentId)
        {
            var matches =  dbContext.Matches.Where(t => t.TournamentId == tournamentId);

            var teams = dbContext.Tournaments
                .Include(t => t.Teams).ThenInclude(tt => tt.Team)
                .Single(t => t.Id == tournamentId).Teams.Select(t => t.Team);

            var results = new Dictionary<int, TeamTournamentResultDto>();
            foreach (Team team in teams)
            {
                var result = new TeamTournamentResultDto 
                {
                    TeamId = team.Id,
                    TeamName = team.Name,
                    Wins = 0,
                    Looses = 0,
                    Draws = 0,
                    Points = 0
                };
                results.Add(team.Id, result);
            }

            foreach (var match in matches)
            {
                var homeTeamResult = results[match.HomeId];
                var awayTeamResult = results[match.AwayId];

                if (match.HomeScore == match.AwayScore)
                {
                    homeTeamResult.Draws++;
                    awayTeamResult.Draws++;
                    homeTeamResult.Points++;
                    awayTeamResult.Points++;
                }
                else if (match.HomeScore > match.AwayScore)
                {
                    homeTeamResult.Wins++;
                    awayTeamResult.Looses++;
                    homeTeamResult.Points += 3;
                }
                else if (match.HomeScore < match.AwayScore)
                {
                    homeTeamResult.Looses++;
                    awayTeamResult.Wins++;
                    awayTeamResult.Points += 3;
                }
            }

            return results.Select(x => x.Value).ToList();            
        }

        [HttpGet("active")]
        public IList<TournamentDto> GetActiveTournamets(){
            var currentDateTime = DateTime.UtcNow;
            
            return dbContext.Tournaments.Where(t => t.StartDate <= currentDateTime && t.EndDate >= currentDateTime)
            .ProjectTo<TournamentDto>().ToList();
        }
    }
}
