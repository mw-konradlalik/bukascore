using System.Collections.Generic;

namespace BukaScore.Models
{
    public class Tournament
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<Match> Matches { get; set; }
        public IEnumerable<Team> Teams { get; set; }
        
    }
}