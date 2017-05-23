using System;
using System.Collections.Generic;

namespace BukaScore.Dtos
{
    public class TournamentDto
    {
        public int Id { get; set; }
        public int GameId { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public IList<TeamDto> Teams { get; set; }
    }
}