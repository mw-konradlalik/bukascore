using Microsoft.EntityFrameworkCore;

namespace BukaScore.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
                   : base(options)
        { }

        public DbSet<Game> Games { get; set; }
        public DbSet<Match> Matches { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Tournament> Tournaments { get; set; }
    }
}