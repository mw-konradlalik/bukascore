using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BukaScore.Dtos;
using BukaScore.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BukaScore.Controllers
{
    [Route("api/[controller]")]
    public class OrganisationsController : Controller
    {
        private ApplicationDbContext dbContext;
        private IMapper mapper;

        public OrganisationsController(ApplicationDbContext dbContext, IMapper mapper)
        {
            this.dbContext = dbContext;
            this.mapper = mapper;
        }

        // GET api/values
        [HttpGet]
        public IList<OrganisationDto> Get()
        {
            return mapper.Map<IList<OrganisationDto>>(dbContext.Organisations.Include(o => o.Games));
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
