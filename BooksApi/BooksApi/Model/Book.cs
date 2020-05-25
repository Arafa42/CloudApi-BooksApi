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
        [StringLength(9999)]
        public string Title { get; set; }

       
        [RegularExpression(@"^[0-9]*$", ErrorMessage = "Only numbers allowed")]
        public string ISBN { get; set; } 

        [Required]
        [RegularExpression(@"^(?:[0-9][0-9]{0,4}(?:\.\d{1,2})?|100000|100000.00)$", ErrorMessage ="Only numbers less than 100.000 allowed")]
        public string Pages { get; set; }
        
         
        [Required]
        [RegularExpression(@"^[a-zA-Z''-'\s]{1,999}$",
        ErrorMessage = "999+ Characters are not allowed.")]
        public string Categories { get; set; }
    

        [RegularExpression(@"([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))", ErrorMessage = "Date doesnt match yyyy-MM-dd format")]
        public string PublishedDate { get; set; }

        [RegularExpression(@"(https?:\/\/.*\.(?:png|jpg|jpeg|gif))", ErrorMessage = "Only image URL allowed")]
        public string ThumbnailURL { get; set; }

        [RegularExpression(@"^[a-zA-Z''-'\s]{1,9999}$",
        ErrorMessage = "9999+ Characters are not allowed.")]
        public string ShortDescription { get; set; }
        public string LongDescription { get; set; }



        [RegularExpression(@"(\b[A-Z][A-Z]+|\b[A-Z]\b)", ErrorMessage ="Only Capital letters allowed")]
        public string Status { get; set; }


        [Range(0, 9999)]
        public Chapters chapters { get; set; }


        [JsonIgnore]
        public ICollection<BooksAuthor> MultipleAuthors { get; set; }


    }
}
