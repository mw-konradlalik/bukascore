using System.Collections.Generic;

namespace BukaScore.Dtos
{
    public class OrganisationDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<GameDto> Games { get; set; }
    }
}