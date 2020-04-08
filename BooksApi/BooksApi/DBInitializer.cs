using BooksApi.Model;
using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksApi
{
    public class DBInitializer
    {


        public static void Initialize(LibraryContext context)
        {
    

            context.Database.EnsureCreated();
           
            
            if (!context.Books.Any())
            {
          
                var book1 = new Book()
                {
                    Title = "The Hunger Games",
                    ISBN = "034939493939",
                    Pages = 360,
                    Genre = "Adventure",
                                    
            };
              

                var book2 = new Book()
            {
                Title = "Animal Farm",
                ISBN = "0300349904909",
                Pages = 9999999,
                Genre = "Classic Novel",
                
            };


                var author1 = new Author()
                {
                    Name = "Test",
                    FirstName = "lala",
                    Birth = "01-01-2000",
                };




                author1.Books = new List<Book>();
                author1.Books.Add(book1);
                author1.Books.Add(book2);

                context.Authors.Add(author1);

                context.Books.Add(book1);
                context.Books.Add(book2);

                context.SaveChanges();

            }
        }
    }
}
