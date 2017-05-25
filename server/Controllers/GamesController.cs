using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BukaScore.Common;
using BukaScore.Dtos;
using BukaScore.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BukaScore.Controllers
{
    [Route("api/[controller]")]
    public class GamesController : Controller
    {
        private ApplicationDbContext dbContext;
        private IMapper mapper;

        public GamesController(ApplicationDbContext dbContext, IMapper mapper)
        {
            this.dbContext = dbContext;
            this.mapper = mapper;
        }

        [HttpPost]
        public SaveResult<GameDto> Create([FromBody] GameDto game)
        {
            var newGame = new Game
            {
                Name = game.Name,
                OrganisationId = game.OrganisationId
            };

            var newEntity = dbContext.Games.Add(newGame);
            dbContext.SaveChanges();

            return new SaveResult<GameDto>
            {
                SavedModel = mapper.Map<GameDto>(newEntity.Entity),
                Errors = new List<string>()
            };
        }

    }
}