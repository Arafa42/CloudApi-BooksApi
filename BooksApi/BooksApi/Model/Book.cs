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

        [Required]
        public string ISBN { get; set; } 

        [Required]
        [Range(1,99999)]
        public int Pages { get; set; }
        
       
        [RegularExpression(@"^[A-Z]+[a-zA-Z""'\s-]*$")]
        [Required]
        [StringLength(999)]
        public string Genre { get; set; }


        [StringLength(500)]
        [JsonIgnore]
        public Author Author { get; set; }


    }
}
