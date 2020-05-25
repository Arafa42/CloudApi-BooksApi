# CloudApi-BooksApi

This project contains a .NET CORE API with an Angular application about books (mostly developer books about programming languages).

------------------------------------------------------------------------------------                                 
       db         88888888ba   88  
      d88b        88      "8b  88  
     d8'`8b       88      ,8P  88  
    d8'  `8b      88aaaaaa8P'  88  
   d8YaaaaY8b     88""""""'    88  
  d8""""""""8b    88           88  
 d8'        `8b   88           88  
d8'          `8b  88           88                                   
------------------------------------------------------------------------------------

The .NET CORE API contains 2 controllers : 
 - BooksController
 - AuthorsController

The .NET CORE API contains 1 many-to-many and 1 one-to-many relation :
 - Multiple authors with multiple books, and multiple books with multiple authors (many-to-many)
 - A book with multiple chapters (one-to-many)
 
 The .NET CORE API contains 4 models :
  - Books
  - Authors
  - BooksAuthor (for many-to-many)
  - Chapters (for one-to-many)
  
  CRUD actions can be operated with both controllers
   - FETCH (example : get a book by id)
   - POST (example : create a new book)
   - PUT (example : update a book)
   - DELETE (example : delete a book)

Authorization is needed for CRUD actions on
 - POST
 - PUT
 - DELETE

You can FETCH an item without authorization 
 
To create a book 3 properties are required
 - Title
 - Category
 - Pages
 
 Most of the properties are validated
  - Published date (has to be in the yyy-MM-dd format)
  - Thumbnail URL (has to be image or GIF URL)
  - Status (must be UPPERCASE)
  - ISBN (only numbers are allowed)
  - etc...
  
------------------------------------------------------------------------------------                                                                                                 
I8,        8        ,8I  88888888888  88888888ba             db         88888888ba   88888888ba   
`8b       d8b       d8'  88           88      "8b           d88b        88      "8b  88      "8b  
 "8,     ,8"8,     ,8"   88           88      ,8P          d8'`8b       88      ,8P  88      ,8P  
  Y8     8P Y8     8P    88aaaaa      88aaaaaa8P'         d8'  `8b      88aaaaaa8P'  88aaaaaa8P'  
  `8b   d8' `8b   d8'    88"""""      88""""""8b,        d8YaaaaY8b     88""""""'    88""""""'    
   `8a a8'   `8a a8'     88           88      `8b       d8""""""""8b    88           88           
    `8a8'     `8a8'      88           88      a8P      d8'        `8b   88           88           
     `8'       `8'       88888888888  88888888P"      d8'          `8b  88           88           
------------------------------------------------------------------------------------
 
 We can communicate with our API using an Angular client side web application.
  
 The Angular web application contains 4 tabs : 
  - Home page (Welcomes you)
  - Library (List of books we get from the API with sorting and paging abilities)
  - Extern API (searchbar for searching books with extra details about every book using an extern API Google Books)
  - API Manager (CRUD operations are possible)
  
 Login authentication is possible (Auth0 or google login)
 
 Authentication token is valid for 24 hours. After 24 hours we need to replace the token in the source code!
 
 ------------------------------------------------------------------------------------                                                         
88        88  88888888ba   88           d8'  ad88888ba   
88        88  88      "8b  88          d8'  d8"     "8b  
88        88  88      ,8P  88         ""    Y8,          
88        88  88aaaaaa8P'  88               `Y8aaaaa,    
88        88  88""""88'    88                 `"""""8b,  
88        88  88    `8b    88                       `8b  
Y8a.    .a8P  88     `8b   88               Y8a     a8P  
 `"Y8888Y"'   88      `8b  88888888888       "Y88888P"                                                                                                                    
 ------------------------------------------------------------------------------------
 
 The API is deployed using Google Cloud
 
 API URL : https://cloudapi-booksapi.ew.r.appspot.com/api/v1/books/
 
 
