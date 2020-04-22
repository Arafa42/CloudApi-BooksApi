using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace BooksApi.Controllers
{

    [Route("api/v1/books")]

    public class BooksController2 : Controller
    {
        private readonly LibraryContext context;

        // GET: /<controller>/
        public BooksController2(LibraryContext context)
        {
            this.context = context;
        }


        [HttpGet]

        public List<Book> GetAllBooks(string genre, string title, int? page, string sort, int length=10, string dir = "asc")
        {
           

            IQueryable<Book> query = context.Books;

            if (!string.IsNullOrWhiteSpace(genre))
            {
                query = query.Where(d => d.Categories == genre);
            }
            if (!string.IsNullOrWhiteSpace(title))
            {
                query = query.Where(d => d.Title == title);
            }

            if (!string.IsNullOrWhiteSpace(sort)) {

                switch (sort)
                {
                    case "title":  
                        if(dir == "asc")
                        { query = query.OrderBy(d => d.Title); }
                        else if(dir == "desc") 
                        { query = query.OrderByDescending(d => d.Title);}
                        break;
                    case "isbn":
                        if(dir == "asc") 
                        { query = query.OrderBy(d => d.ISBN);}
                        else if(dir == "desc") 
                        { query = query.OrderByDescending(d => d.ISBN);}
                        break;

                }              
            
            }




            if(page.HasValue)
            {
                query = query.Skip(page.Value * length); 
            }
            query = query.Take(length);


            return query.ToList();
        }


        [HttpPost]
        public IActionResult CreateBook([FromBody] Book newBook)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            context.Books.Add(newBook);
            context.SaveChanges();
            return Created("", newBook);
        }


        [Route("{id}")]
        [HttpGet]

        public IActionResult GetBook(int id)
        {

            var book = context.Books
                .Include(d => d.Authors)
                .SingleOrDefault(d => d.Id == id);


            if(book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }







        [Route("{id}")]
        [HttpDelete]

        public IActionResult DeleteBook(int id)
        {
            var book = context.Books.Find(id);
            if(book == null)
            {
                return NotFound();
            }

            context.Books.Remove(book);
            context.SaveChanges();
            return NoContent();

        }


        [HttpPut]

        public IActionResult UpdateBook([FromBody] Book updateBook)
        {
            var orgBook = context.Books.Find(updateBook.Id);
            if(orgBook == null)
            {
                return NotFound();
            }

            orgBook.Title = updateBook.Title;
            orgBook.Pages = updateBook.Pages;
            orgBook.ISBN = updateBook.ISBN;
            orgBook.Categories = updateBook.Categories;
          

            context.SaveChanges();
            return Ok(orgBook);
        }



    }
}
