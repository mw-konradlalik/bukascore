using System.Collections.Generic;

namespace BukaScore.Models
{
    public class Team
    {
        public int Id { get; set; }
        public int GameId {get; set;}
        public string Name { get; set; }

        public IEnumerable<TournamentTeam> Tournaments {get; set;}
    }
}