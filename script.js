// library array to store books 
let myLibrary = []; 

//book constructor function 
function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
}

//Add info method to prototype object 
Book.prototype.info = function() {
    this.read ? print = 'read' : print = 'not read yet'; 
    return `${this.title} by ${this.author}, ${this.pages} pages, ${print}`
}

//Book Samples
const harryPotter = new Book('Harry Potter', 'J.K. Rowling', 600, false);
const pride = new Book('Pride and Prejudice', 'Jane Austen', 467, true);
const killBird = new Book('To kill a Mockingbird', 'Harper Lee', 987, false);

//Add a book to library 
function addBookToLibrary() {
    myLibrary.push(new Book('The Hunger Games', 'Suzanne Collins', 300, true));
}

console.log(myLibrary);
addBookToLibrary()
console.log(myLibrary);

//function that loops through array and displays each book on page 

//new book button that brings up a form that allows users to input details of new book 

//add a button on each book's display to remove book from library 

//Select buttons that open and close modal 
const openModalButton = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('#close-modal');
const overlay = document.querySelector('#overlay');

//open modal function 