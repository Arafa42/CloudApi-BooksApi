# CloudApi-BooksApi

This project contains a .NET CORE API with an Angular application about books (mostly developer books about programming languages).

------------------------------------------------------------------------------------                                 
API                            
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
WEB APP        
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
URL'S                                                                                                                  
 ------------------------------------------------------------------------------------
 
 The API is deployed using Google Cloud
 
 API URL : https://cloudapi-booksapi.ew.r.appspot.com/api/v1/books/
 
 SPECIFIC BOOK URL (example book 42) :  https://cloudapi-booksapi.ew.r.appspot.com/api/v1/books/42
 
 AUTHOR URL (example author 10) :  https://cloudapi-booksapi.ew.r.appspot.com/api/v1/authors/10
 
 PAGING AND SORTING WITH DIRECTION URL : https://cloudapi-booksapi.ew.r.appspot.com/api/v1/books?page=0&length=100&sort=category&dir=asc
 
 BOOKS OF SPECIFIC AUTHOR URL (example author 1) : https://cloudapi-booksapi.ew.r.appspot.com/api/v1/authors/1/books
 
