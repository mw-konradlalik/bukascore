namespace BukaScore.Dtos
{
    public class TeamTournamentResultDto
    {
        public int TeamId { get; set; }
        public string TeamName { get; set; }
        public int Wins { get; set; }
        public int Looses { get; set; }
        public int Draws { get; set; }
        public int Points { get; set; }
    }
}