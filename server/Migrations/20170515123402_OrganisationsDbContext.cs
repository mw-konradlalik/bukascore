using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace bukascore.Migrations
{
    public partial class OrganisationsDbContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Games_Organisation_OrganisationId",
                table: "Games");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Organisation",
                table: "Organisation");

            migrationBuilder.RenameTable(
                name: "Organisation",
                newName: "Organisations");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Organisations",
                table: "Organisations",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Games_Organisations_OrganisationId",
                table: "Games",
                column: "OrganisationId",
                principalTable: "Organisations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Games_Organisations_OrganisationId",
                table: "Games");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Organisations",
                table: "Organisations");

            migrationBuilder.RenameTable(
                name: "Organisations",
                newName: "Organisation");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Organisation",
                table: "Organisation",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Games_Organisation_OrganisationId",
                table: "Games",
                column: "OrganisationId",
                principalTable: "Organisation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
