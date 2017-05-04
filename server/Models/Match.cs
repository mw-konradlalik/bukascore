namespace BukaScore.Models
{
    public class Match
    {
        public int Id { get; set; }
        public Team Home { get; set; }
        public Team Away { get; set; }
        public int HomeScore { get; set; }
        public int AwayScore { get; set; }
    }
}