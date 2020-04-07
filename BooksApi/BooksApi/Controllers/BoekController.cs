using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BooksApi.Controllers
{
    [Route("api/v1/books")]
    public class BoekController : Controller
    {
        List<Book> list = new List<Book>();

        public BoekController()
        {

            list.Add(new Book()
            {
                Id = 1,
                Title = "Animal Farm",
                ISBN = "444-332-32456667",
                Author = "George Orwell",
                Pages = 100

            });

            list.Add(new Book()
            {
                Id = 2,
                Title = "The Great Gatsby",
                ISBN = "434-132-32456367",
                Author = "F. Scott Fitzgerald",
                Pages = 150
            });

        }


        [Route("{id}")]
        [HttpGet]
        public IActionResult GetBooks(int id)
        {
            var firstBookMet150paginas = list.First(book => book.Pages == 150);


            if(id == 1){return new JsonResult(list[0]);}
            else if (id == 2) { return new JsonResult(list[1]);}
            else if (id == 150) { return new JsonResult(firstBookMet150paginas); }

            else { return NotFound(); }          
        }


   
    
    }
}
