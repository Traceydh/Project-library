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
    //add data to array
    myLibrary.push(new Book(title.value, author.value, pages.value, read));
    generateBookCard(read);
}

function generateBookCard(read) {
    for (let i = 0; i < myLibrary.length; i++) {
            const newBook = document.createElement('div'); 
            newBook.classList.add('book');
            newBook.dataset.number = `num-${i}`;
        
            //delete button 
            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '&times;';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', e => {
                console.log(e);
            });
        
            //Create elements for inside book 
            const newTitle = document.createElement('div');
            newTitle.textContent = myLibrary[arrayIndex].title; 
            newTitle.classList.add('title');
        
            const newAuthor = document.createElement('div'); 
            newAuthor.textContent = `by ${myLibrary[arrayIndex].author}`; 
        
            const newPages = document.createElement('div');
            newPages.textContent = `${myLibrary[arrayIndex].pages} pages`;  
        
            const newRead = document.createElement('div');
            read ? newRead.textContent = `read ${tick}` : newRead.textContent = 'to be read';
        
            //append 
            newBook.append(deleteButton);
            newBook.append(newTitle);
            newBook.append(newAuthor);
            newBook.append(newPages);
            newBook.append(newRead);
        
            bookshelf.append(newBook);
        
            randomColor();
            newBook.style.backgroundColor = bookColor;
            //make button same color as background of book
            deleteButton.style.backgroundColor = bookColor;
            //remove modal 
            closeModal()
            //clear input 
            resetForm.reset();
        }
}

function removeBook(book) {
    //remove elements in DOM
    // add remove tag 
    //remove myLibrary 
    //look for remove tag to get rid of array item 
    for (let i = 0; i < myLibrary.length; i ++) {
        if (myLibrary[i].classList.contains('remove-book')) {
            myLibrary.splice(i, 1);
        }
    }
}

//random background color generator
function randomColor() {
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