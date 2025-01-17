﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using BooksApi.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BooksApi.Controllers
{
    [Route("api/v1/authors")]
    public class AuthorController2 : Controller
    {
       
            private readonly LibraryContext context;

            // GET: /<controller>/
            public AuthorController2(LibraryContext context)
            {
                this.context = context;
            }

        //    [HttpGet]
        //    public List<Author> GetAllAuthors()
        //    {

        //        return context.Authors.ToList();
        //    }





        [HttpGet]

        public List<Author> GetAllAuthors(string name, string firstname,int? page, string sort, int length = 10, string dir = "asc")
        {


            IQueryable<Author> query = context.Authors;

            if (!string.IsNullOrWhiteSpace(name))
            {
                query = query.Where(d => d.Name == name);
            }
            if (!string.IsNullOrWhiteSpace(firstname))
            {
                query = query.Where(d => d.FirstName == firstname);
            }

            if (!string.IsNullOrWhiteSpace(sort))
            {

                switch (sort)
                {
                    case "firstname":
                        if (dir == "asc")
                        { query = query.OrderBy(d => d.FirstName); }
                        else if (dir == "desc")
                        { query = query.OrderByDescending(d => d.FirstName); }
                        break;
                    case "name":
                        if (dir == "asc")
                        { query = query.OrderBy(d => d.Name); }
                        else if (dir == "desc")
                        { query = query.OrderByDescending(d => d.Name); }
                        break;
   
                }

            }


            if (page.HasValue)
            {
                query = query.Skip(page.Value * length);
            }
            query = query.Take(length);


            return query.ToList();
        }











        [HttpPost]
            public IActionResult CreateAuthor([FromBody] Author newAuthor)
            {
                context.Authors.Add(newAuthor);
                context.SaveChanges();
                return Created("", newAuthor);
            }


            









            [Route("{id}")]
            [HttpGet]

            public IActionResult GetAuthor(int id)
            {

                var author = context.Authors
                    //.Include(d => d.Books)
                    .SingleOrDefault(d => d.Id == id);


                if (author == null)
                {
                    return NotFound();
                }
                return Ok(author);
            }




        [Route("{id}/books")]
        [HttpGet]

        public IActionResult MultipleBooks(int id)
        {
            var authorsWithBooks = context.Authors.Include(c => c.MultipleBooks).ThenInclude(row => row.Book).First(c => c.Id == id);
            var multipleBooks = authorsWithBooks.MultipleBooks.Select(row => row.Book);


            if(multipleBooks == null)
            {
                return NotFound();
            }

            return Ok(multipleBooks);

        }



        //[Route("{id}/books")]
        //[HttpGet]

        //public IActionResult GetBooks(int id)
        //{

        //    var author = context.Authors
        //        .Include(d => d.Books)
        //        .SingleOrDefault(d => d.Id == id);


        //    if (author == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(author.Books);
        //}


        [Route("{id}")]
            [HttpDelete]

            public IActionResult DeleteAuthor(int id)
            {
                var author = context.Authors.Find(id);
                if (author == null)
                {
                    return NotFound();
                }

                context.Authors.Remove(author);
                context.SaveChanges();
                return NoContent();

            }


            [HttpPut]

            public IActionResult UpdateAuthor([FromBody] Author updateAuthor)
            {
                var orgAuthor = context.Authors.Find(updateAuthor.Id);
                if (orgAuthor == null)
                {
                    return NotFound();
                }

                orgAuthor.Name = updateAuthor.Name;
                orgAuthor.FirstName = updateAuthor.FirstName;
                orgAuthor.Birth = updateAuthor.Birth;
    

                context.SaveChanges();
                return Ok(orgAuthor);
            }



        
    }
}
