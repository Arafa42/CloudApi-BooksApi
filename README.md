# CloudApi-BooksApi

This project contains a .NET CORE API with an Angular application about books (mostly developer books about programming languages).

------------------------------------------------------------------------------------
     ___      .______    __  
    /   \     |   _  \  |  | 
   /  ^  \    |  |_)  | |  | 
  /  /_\  \   |   ___/  |  | 
 /  _____  \  |  |      |  | 
/__/     \__\ | _|      |__| 
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
 ____    __    ____  _______ .______           ___      .______   .______   
\   \  /  \  /   / |   ____||   _  \         /   \     |   _  \  |   _  \  
 \   \/    \/   /  |  |__   |  |_)  |       /  ^  \    |  |_)  | |  |_)  | 
  \            /   |   __|  |   _  <       /  /_\  \   |   ___/  |   ___/  
   \    /\    /    |  |____ |  |_)  |     /  _____  \  |  |      |  |      
    \__/  \__/     |_______||______/     /__/     \__\ | _|      | _|      
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
  __    __  .______       __          _______
|  |  |  | |   _  \     |  |        /       |
|  |  |  | |  |_)  |    |  |       |   (----`
|  |  |  | |      /     |  |        \   \    
|  `--'  | |  |\  \----.|  `----.----)   |   
 \______/  | _| `._____||_______|_______/ 
 ------------------------------------------------------------------------------------
 
 The API is deployed using Google Cloud
 
 API URL : https://cloudapi-booksapi.ew.r.appspot.com/api/v1/books/
 
 
