namespace BukaScore.Models
{
    public class Match
    {
        public int Id { get; set; }
        public int HomeId { get; set; }
        public Team Home { get; set; }
        public int AwayId { get; set; }
        public Team Away { get; set; }
        public int HomeScore { get; set; }
        public int AwayScore { get; set; }
        public int TournamentId { get; set; }
    }
}