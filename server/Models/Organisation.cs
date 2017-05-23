using System.Collections.Generic;

namespace BukaScore.Models
{
    public class Organisation
    {
        public int Id { get; set; }

        public string Name { get; set;}
        
        public ICollection<Game> Games {get; set;}
        
    }
}