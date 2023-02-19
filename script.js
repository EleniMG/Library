let myLibrary = [];

function Book(name, author){
    this.name = name;
    this.author = author;
}

const hP = new Book('Harry Potter', 'PK Bowling')

console.log(hP)



function addingNewBooktoLibrary(name, author){
    const newBook = new Book(name, author);
    return myLibrary.push(newBook);
}

addingNewBooktoLibrary('Rabbit', 'poo')

addingNewBooktoLibrary('abc', '123')

console.log(myLibrary)