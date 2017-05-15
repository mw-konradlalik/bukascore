using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using BukaScore.Models;

namespace bukascore.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BukaScore.Models.Game", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<int>("OrganisationId");

                    b.HasKey("Id");

                    b.HasIndex("OrganisationId");

                    b.ToTable("Games");
                });

            modelBuilder.Entity("BukaScore.Models.Match", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AwayId");

                    b.Property<int>("AwayScore");

                    b.Property<int?>("HomeId");

                    b.Property<int>("HomeScore");

                    b.Property<int?>("TournamentId");

                    b.HasKey("Id");

                    b.HasIndex("AwayId");

                    b.HasIndex("HomeId");

                    b.HasIndex("TournamentId");

                    b.ToTable("Matches");
                });

            modelBuilder.Entity("BukaScore.Models.Organisation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Organisation");
                });

            modelBuilder.Entity("BukaScore.Models.Team", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("GameId");

                    b.Property<string>("Name");

                    b.Property<int?>("TournamentId");

                    b.HasKey("Id");

                    b.HasIndex("TournamentId");

                    b.ToTable("Teams");
                });

            modelBuilder.Entity("BukaScore.Models.Tournament", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("GameId");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("GameId");

                    b.ToTable("Tournaments");
                });

            modelBuilder.Entity("BukaScore.Models.Game", b =>
                {
                    b.HasOne("BukaScore.Models.Organisation", "Organisation")
                        .WithMany("Games")
                        .HasForeignKey("OrganisationId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("BukaScore.Models.Match", b =>
                {
                    b.HasOne("BukaScore.Models.Team", "Away")
                        .WithMany()
                        .HasForeignKey("AwayId");

                    b.HasOne("BukaScore.Models.Team", "Home")
                        .WithMany()
                        .HasForeignKey("HomeId");

                    b.HasOne("BukaScore.Models.Tournament")
                        .WithMany("Matches")
                        .HasForeignKey("TournamentId");
                });

            modelBuilder.Entity("BukaScore.Models.Team", b =>
                {
                    b.HasOne("BukaScore.Models.Tournament")
                        .WithMany("Teams")
                        .HasForeignKey("TournamentId");
                });

            modelBuilder.Entity("BukaScore.Models.Tournament", b =>
                {
                    b.HasOne("BukaScore.Models.Game")
                        .WithMany("Tournaments")
                        .HasForeignKey("GameId");
                });
        }
    }
}
