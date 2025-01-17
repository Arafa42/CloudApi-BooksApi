﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using BooksApi.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


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
                    case "id":
                        if (dir == "asc")
                        { query = query.OrderBy(d => d.Id); }
                        else if (dir == "desc")
                        { query = query.OrderByDescending(d => d.Id); }
                        break;
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
                    case "category":
                        if (dir == "asc")
                        { query = query.OrderBy(d => d.Categories); }
                        else if (dir == "desc")
                        { query = query.OrderByDescending(d => d.Categories); }
                        break;
                    case "page":
                        if (dir == "asc")
                        { query = query.OrderBy(d => d.Pages); }
                        else if (dir == "desc")
                        { query = query.OrderByDescending(d => d.Pages); }
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

        [Authorize]
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
                .Include(d => d.chapters)
                .SingleOrDefault(d => d.Id == id);


            if(book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }




        [Route("{id}/authors")]
        [HttpGet]

        public IActionResult MultipleAuthors(int id)
        {
            var booksWithAuthors = context.Books.Include(c => c.MultipleAuthors).ThenInclude(row => row.Author).First(c => c.Id == id);
            var multipleAuthors = booksWithAuthors.MultipleAuthors.Select(row => row.Author);

          
            

            if (multipleAuthors == null)
            {
                return NotFound();
            }

            return Ok(multipleAuthors);

        }


        //[Route("{id}/authors")]
        //[HttpGet]

        //public IActionResult GetAuthors(int id)
        //{

        //    var book = context.Books
        //        .Include(d => d.Authors)
        //        .SingleOrDefault(d => d.Id == id);


        //    if (book == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(book.Authors);
        //}


        [Authorize]
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

        [Authorize]
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
            orgBook.Status = updateBook.Status;
            orgBook.ShortDescription = updateBook.ShortDescription;
            orgBook.LongDescription = updateBook.LongDescription;
            orgBook.ThumbnailURL = updateBook.ThumbnailURL;
            


            context.SaveChanges();
            return Ok(orgBook);
        }



    }
}
