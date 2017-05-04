using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BukaScore.Models;
using Microsoft.AspNetCore.Mvc;

namespace BukaScore.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private ApplicationDbContext dbContext;

        public ValuesController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // GET api/values
        [HttpGet]
        public IList<Game> Get()
        {
            //return new string[] { "value1", "value2", "value3", "value4" };
            return dbContext.Games.ToList();
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
