// library array to store books 
let myLibrary = []; 
let arrayIndex = 0; 

//tick symbol 
let tick = '\u2713';
//color
let bookColor = '#8E3200';

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
const resetForm = document.querySelector('form');

//Get bookshelf element 
const bookshelf = document.querySelector('#bookshelf');

//Connect function and submit button 
const submit = document.querySelector('#submit');
submit.addEventListener('click', addBookToLibrary);

//Add a book to library array and generate new 'book' element in DOM 
function addBookToLibrary() {
    //get radiobutton selection 
    const read = document.querySelector('input[name="read"]:checked').value;
    myLibrary.push(new Book(title.value, author.value, pages.value, read));
    //add data to array 
    const newBook = document.createElement('div'); 
    newBook.classList.add('book');

    //Create elements for inside book 
    const newTitle = document.createElement('div');
    newTitle.textContent = myLibrary[arrayIndex].title; 

    const newAuthor = document.createElement('div'); 
    newAuthor.textContent = `by ${myLibrary[arrayIndex].author}`; 

    const newPages = document.createElement('div');
    newPages.textContent = `${myLibrary[arrayIndex].pages} pages`;  

    const newRead = document.createElement('div');
    read ? newRead.textContent = `read ${tick}` : newRead.textContent = 'to be read';

    arrayIndex += 1;

    //append 
    newBook.append(newTitle);
    newBook.append(newAuthor);
    newBook.append(newPages);
    newBook.append(newRead);

    bookshelf.append(newBook);

    // Change book background color 
    let randomNum = Math.floor(Math.random()*4);
    switch (randomNum) {
        case 0: 
            break;
        case 1:
            bookColor = '#228B22'
            break;
        case 2:
            bookColor = '#808000';
            break;
        case 3: 
            bookColor = '#000058';
            break;
    }
    
    newBook.style.backgroundColor = bookColor;

    //remove modal 
    closeModal()
    //clear input 
    resetForm.reset();
}

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