//Library array stores all book object 
let myLibrary = []; 

//constructor function that makes new book objects 
function Book(title, author, pages) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
}

const testBook = new Book('Title', "someone", 50);

Book.prototype.test = function () {
    console.log(this.title + this.author + this.pages);
}

//function that can take user's input and store the new book objects into an array 




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