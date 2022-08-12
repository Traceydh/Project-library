//Library array stores all book object 
let myLibrary = []; 

//Select interactive elements on page 
const submitFormButton = document.querySelector('#submit');
const removeBookButton = document.querySelector('#remove');

//constructor function that makes new book objects 
function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = false ; 
}

function createBookCard (book) {
    const bookCard = document.createElement('div');
    const removeCard = document.createElement('button'); 
    const title = document.createElement('div'); 
    const author = document.createElement('div'); 
    const page = document.createElement('div'); 
    
    bookCard.classList.add('book');
    removeCard.classList.add('delete');
    title.classList.add('title');

    title.textContent = `${book.title}`;
    author.textContent = `By ${author.title}`;
    page.textContent = `${page.title} pages`;

}


const testBook = new Book('Title', "someone", 50);


//Methods for book object 
//add book to main container 
Book.prototype.add = function () {
    console.log('add' + this.title);
}

//remove book from main container 
Book.prototype.remove = function () {
    console.log('remove' + this.title);
}

//function that can take user's input and store the new book objects into an array 
//function addBookToLibrary() {}

//function that loops through array and displays each book on page 
//myLibrary.forEach(); 

//Elements of book object that will be injected into the DOM 

//when Add book button is pressed 
//Add book object into myLibrary array 
//Create book object


////////////////////////Modal//////////////////////

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