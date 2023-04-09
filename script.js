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

    const gridTile = document.createElement("div");
    const gridContent = document.createTextNode(Object.values(myLibrary[i]).join(" by "));
    grid.appendChild(gridTile);
    gridTile.appendChild(gridContent);

}

// Opening and closing form

function openForm(){
    return document.getElementById("pop-up-form").style.display = 'block'

}

document.getElementById("new-book-form-button").addEventListener("click", openForm)