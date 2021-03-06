using System;
using System.Collections.Generic;

namespace BukaScore.Models
{
    public class Tournament
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<Match> Matches { get; set; }
        public IEnumerable<TournamentTeam> Teams { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int GameId { get; set; }
    }
}