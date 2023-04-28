let myLibrary = [
    {name: 'Autobiography of John Bloggs', author: 'John Bloggs'},
    {name: 'Butobiography of Hohn Bloggs', author: 'Hohn Bloggs'}
];


// Creating 'Book' object

function Book(name, author){
    this.name = name;
    this.author = author;
}

// const hP = new Book('Harry Potter', 'PK Bowling')

// console.log(hP)


// Pushing the 'Book' object to the library array

function addingNewBooktoLibrary(name, author){
    const newBook = new Book(name, author);
    return myLibrary.push(newBook);
}

addingNewBooktoLibrary('Rabbit', 'Alice Wonderland')

addingNewBooktoLibrary('abc', '123')


// Displaying each book on the page

const grid = document.querySelector('.library-grid');

for (let i = 0; i < myLibrary.length; i++) {

    const gridTile = document.createElement("div")
    const gridContent = document.createTextNode(Object.values(myLibrary[i]).join(" by "));
    const createRemoveButton = document.createElement('button')
    const createReadButton = document.createElement('button')
    grid.appendChild(gridTile).setAttribute("id", myLibrary[i].name);;
    gridTile.appendChild(gridContent);
    gridTile.appendChild(createRemoveButton).innerText = 'Remove'
    gridTile.appendChild(createReadButton).innerText = 'Read'
    createReadButton.setAttribute("class", "read");
    createRemoveButton.setAttribute("class", "remove");
    
}

// Opening form

function openForm(){
    return document.getElementById("pop-up-form").style.display = 'block'
}

document.getElementById("new-book-form-button").addEventListener("click", openForm)

// Adding new books to the library

let newBookAuthor = document.getElementById('author').value
let newBookTitle = document.getElementById('title').value
let newBookLength = document.getElementById('numberOfPages').value



function bookSubmission(event) {
    event.preventDefault()
     let submissionMessage = "Thank you for submitting your book!"
    document.getElementById("pop-up-form").innerHTML += submissionMessage
}


document.getElementById("submit-button").addEventListener("click", bookSubmission)


// Changing read status


function readABook(event){
    const parent = event.target.parentElement;
    return parent.style.backgroundColor = "red"
}

document.querySelectorAll('.read').forEach(element =>element.addEventListener("click", readABook));