using System.Collections.Generic;

namespace BukaScore.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int OrganisationId { get; set; }

        public Organisation Organisation { get; set; }
        public IEnumerable<Tournament> Tournaments { get; set; }
    }
}