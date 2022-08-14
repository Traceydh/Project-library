//Library array stores all book object 
let myLibrary = []; 

//constructor function that makes new book objects 
function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read;
}

//Method:remove book from main container 
Book.prototype.remove = function () {
    console.log('remove' + this.title);
}

//Select buttons elements on page 
const submitFormButton = document.querySelector('#submit');
const removeBookButton = document.querySelector('#remove');

//input form 
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const resetForm = document.querySelector('form');

//Buttons 
submitFormButton.addEventListener('click', addBookToLibrary);

//function that can take user's input and store the new book objects into an array 
function addBookToLibrary() {
    const read = document.querySelector('input[name="read"]:checked'); 
    myLibrary.push(new Book(title.value, author.value, pages.value, read.value));
    render();
}

//Create visual book card in browser 
function render() {
 const display = document.querySelector('#bookshelf');
 const books = document.querySelectorAll('.book');

books.forEach(book => display.removeChild(book));

 for (let i=0; i < myLibrary.length; i++) {
    createBookCard(myLibrary[i], i);
 }
}

function createBookCard(book, i) {
    const bookShelf = document.querySelector('#bookshelf');
    const bookCard = document.createElement('div');
    const removeCard = document.createElement('button'); 
    const title = document.createElement('div'); 
    const author = document.createElement('div'); 
    const pages = document.createElement('div'); 
    const readButton = document.createElement('button');
    
    bookCard.classList.add('book');
    bookCard.dataset.number = `${i}`;
    removeCard.classList.add('delete');
    title.classList.add('title');
    readButton.classList.add('read');

    removeCard.innerHTML = '&times;';
    title.textContent = `${book.title}`;
    author.textContent = `By ${book.author}`;
    pages.textContent = `${book.pages} pages`;
    if (book.read) {
        readButton.textContent = "Read";
    } else {
        readButton.textContent = "Not Read";
    }

    bookCard.append(removeCard);
    bookCard.append(title);
    bookCard.append(author);
    bookCard.append(pages);
    bookCard.append(readButton);
    bookShelf.append(bookCard);

    console.log(bookCard);

}


////////////////////////test//////////////////////
let test = new Book('Title', "someone", 50, true);
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