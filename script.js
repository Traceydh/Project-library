// library array to store books 
let myLibrary = []; 

//book constructor function 
function books(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
    this.info = function () {
        let print = 'not read yet';
        if (read) {
            print = 'read';
        }
        return `${title} by ${author}, ${pages} pages, ${print}`
    }
}

//ask user for input and add book to library 
function addBookToLibrary() {

}

//function that loops through array and displays each book on page 

//new book button that brings up a form that allows users to input details of new book 

//add a button on each book's display to remove book from library 

