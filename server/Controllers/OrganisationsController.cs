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
        public SaveResult<OrganisationDto> Post([FromBody]OrganisationDto organisation)
        {
            var newOrg = new Organisation
            {
                Name = organisation.Name
            };

            var entry = dbContext.Organisations.Add(newOrg);

            dbContext.SaveChanges();

            return new SaveResult<OrganisationDto>()
            {
                SavedModel = mapper.Map<OrganisationDto>(entry.Entity),
                Errors = new List<string>()
            };
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Update([FromBody]OrganisationDto organisation)
        {
            var existingOrganisation = dbContext.Organisations.SingleOrDefault(org => org.Id == organisation.Id);

            if (existingOrganisation != null)
            {
                existingOrganisation.Name = organisation.Name;
            }
            else
            {
                return NotFound(organisation);
            }

            dbContext.SaveChanges();

            return Ok(new SaveResult<OrganisationDto>(){
                SavedModel = mapper.Map<OrganisationDto>(existingOrganisation),
                Errors = new List<string>()
            });
        }

        // DELETE api/values/5
        [HttpDelete("{organisationId}")]
        public RemoveResult Delete(int organisationId)
        {
            var org = dbContext.Organisations.Single(x => x.Id == organisationId);
            dbContext.Organisations.Remove(org);
            dbContext.SaveChanges();

            return new RemoveResult { Errors = new List<string>() };
        }
    }
}
