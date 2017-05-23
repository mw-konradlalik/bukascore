using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

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
        public DbSet<Organisation> Organisations {get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.Entity<TournamentTeam>()
            .HasKey(t => new {t.TournamentId, t.TeamId});

            modelBuilder.Entity<TournamentTeam>()
            .HasOne(tt => tt.Tournament)
            .WithMany(t => t.Teams)
            .HasForeignKey(t =>t.TournamentId);

            modelBuilder.Entity<TournamentTeam>()
            .HasOne(tt => tt.Team)
            .WithMany(t => t.Tournaments)
            .HasForeignKey(t =>t.TeamId);

            modelBuilder.Entity<Match>()
            .HasOne(m => m.Away)
            .WithMany()
            .HasForeignKey(m => m.AwayId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Match>()
            .HasOne(m => m.Home)
            .WithMany()
            .HasForeignKey(m => m.HomeId)
            .OnDelete(DeleteBehavior.Restrict);
        }  
    }
}