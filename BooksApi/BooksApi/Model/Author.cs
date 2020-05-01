using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace BooksApi.Model
{
    public class Author
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string FirstName { get; set; }
        public string Birth { get; set; }

        
        public ICollection<Book> Books { get; set; }

    }
}
