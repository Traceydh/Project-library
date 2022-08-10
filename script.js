// library array to store books 
let myLibrary = []; 

//book constructor function 
function Book(title, author, pages) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    //this.read = read; 
}

//Add info method to prototype object 
Book.prototype.info = function() {
    //this.read ? print = 'read' : print = 'not read yet'; 
    return `${this.title} by ${this.author}, ${this.pages} pages`
}

//Get forms input as variables in JS 
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');

//Get bookshelf element 
const bookshelf = document.querySelector('#bookshelf');

//Connect function and submit button 
const submit = document.querySelector('#submit');
submit.addEventListener('click', addBookToLibrary);

//Add a book to library array and generate new 'book' element in DOM 
function addBookToLibrary() {
    myLibrary.push(new Book(title, author, pages));
    const newBook = document.createElement('div')
}

//function that loops through array and displays each book on page 

//new book button that brings up a form that allows users to input details of new book 

//add a button on each book's display to remove book from library 

//Select buttons that open and close modal 
const openModalButton = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('#close-modal');
const overlay = document.querySelector('#overlay');
const form = document.querySelector('.form-modal');

//Connect button element with function
openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal); 

//open modal function 
function openModal() {
    form.classList.add("active");
    overlay.classList.add("active");
} 

//close modal function 
function closeModal() {
    form.classList.remove("active");
    overlay.classList.remove("active");
} 