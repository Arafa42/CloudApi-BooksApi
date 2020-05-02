using BooksApi.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksApi
{
    public class LibraryContext : DbContext
    {
        public LibraryContext(DbContextOptions<LibraryContext> options):base(options)
        { }


        public DbSet<Book> Books { get; set; }
        public DbSet<Author> Authors { get; set; }

        public DbSet<BooksAuthor> BooksAuthor { get; set; }




        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            modelBuilder.Entity<BooksAuthor>()
                .HasKey(b => new { b.BookID, b.AuthorID });

            modelBuilder.Entity<BooksAuthor>()
                .HasOne(d => d.Book)
                .WithMany(p => p.MultipleAuthors)
                .HasForeignKey(d => d.BookID);

            modelBuilder.Entity<BooksAuthor>()
                .HasOne(d => d.Author)
                .WithMany(t => t.MultipleBooks)
                .HasForeignKey(d => d.AuthorID);


        }



    }
}
