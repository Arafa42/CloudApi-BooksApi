using BooksApi.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace BooksApi
{
    public class Book
    {
        public int Id { get; set; }

        [Required]
        [StringLength(999)]
        public string Title { get; set; }

       
        public string ISBN { get; set; } 

        [Required]
        [Range(0,99999)]
        public string Pages { get; set; }
        
         
        [Required]
        [StringLength(999)]
        public string Categories { get; set; }

        [StringLength(500)]
    
        public Author Authors { get; set; }
        public string PublishedDate { get; set; }
        public string ThumbnailURL { get; set; }
        public string ShortDescription { get; set; }
        public string LongDescription { get; set; }
        public string Status { get; set; }


        [JsonIgnore]
        public ICollection<BooksAuthor> MultipleAuthors { get; set; }


    }
}
