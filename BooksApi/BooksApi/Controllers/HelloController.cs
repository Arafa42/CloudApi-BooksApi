using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BooksApi.Controllers
{
    public class HelloController : Controller
    {
      
        [Route("hello")]
        [HttpGet]
        public IActionResult Hello()
        {
            var result = Content("Hello World!");
            result.StatusCode = 200;
            return result;
        }

        [Route("notfound")]
        [HttpGet]
        public IActionResult Error()
        {

            return NotFound();
        }

    }
}