using System.ComponentModel.DataAnnotations;

namespace BukaScore.Models
{
    public class TournamentTeam
    {
        public int TournamentId { get; set; }
        public Tournament Tournament { get; set; }
        public int TeamId { get; set; }
        public Team Team { get; set; }
    }
}

