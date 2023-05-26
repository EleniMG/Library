let myLibrary = [
    {id: '1', name: 'Autobiography of John Bloggs', author: 'John Bloggs', read: true},
    {id: '2', name: 'Butobiography of Hohn Bloggs', author: 'Hohn Bloggs', read: false}
];


// Creating 'Book' object

function Book(id, name, author, read){
    this.id = id;
    this.name = name;
    this.author = author;
    this.read = read;
}



// Pushing the 'Book' object to the library array

function addingNewBooktoLibrary(id, name, author, read){
    const newBook = new Book(id, name, author, read);
    return myLibrary.push(newBook);
}

addingNewBooktoLibrary('3', 'Rabbit', 'Alice Wonderland', false)

addingNewBooktoLibrary('4', 'abc', '123', false)


// Displaying each book on the page

const grid = document.querySelector('.library-grid');

for (let i = 0; i < myLibrary.length; i++) {

    const gridTile = document.createElement("div")
    const gridContent = document.createTextNode(Object.values(myLibrary[i]).join(" - "));
    const createRemoveButton = document.createElement('button')
    const createReadButton = document.createElement('button')
    grid.appendChild(gridTile).setAttribute("id", myLibrary[i].id);;
    gridTile.appendChild(gridContent);
    gridTile.appendChild(createRemoveButton).innerText = 'Remove'
    gridTile.appendChild(createReadButton).innerText = 'Read'
    createReadButton.setAttribute("class", "read");
    createRemoveButton.setAttribute("class", "remove");

    if (myLibrary[i].read) {
        gridTile.classList.add('read-container')
    }
    
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


// Changing read status and colour of grid tile

function readABook(event){
    const parent = event.target.parentElement;

    const parentId = parent.getAttribute('id')

    myLibrary.map(book => {
        if (book.id === parentId){
            book.read = !book.read

            book.read ? parent.classList.add('read-container') : parent.classList.remove('read-container')
        }
    })

    
    
}

document.querySelectorAll('.read').forEach(element => element.addEventListener("click", readABook));