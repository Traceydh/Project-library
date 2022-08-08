// library array to store books 
let myLibrary = []; 

//book constructor function 
function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
}

//Add methods to prototype object 
Book.prototype.info = function(read) {
    let print = 'not read yet';
    if (read) {
        print = 'read';
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${print}`
}

//create new book 
const hungerGames = new Book('The Hunger Games', 'Suzanne Collins', 300, true);
const harryPotter = new Book('Harry Potter', 'J.K. Rowling', 600, false);
const pride = new Book('Pride and Prejudice', 'Jane Austen', 467, true);
const killBird = new Book('To kill a Mockingbird', 'Harper Lee', 987, false);


console.log(hungerGames.info());

//ask user for input and add book to library 
function addBookToLibrary() {

}

//function that loops through array and displays each book on page 

//new book button that brings up a form that allows users to input details of new book 

//add a button on each book's display to remove book from library 

