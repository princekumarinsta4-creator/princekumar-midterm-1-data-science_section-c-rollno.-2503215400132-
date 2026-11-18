class Book {
    constructor(id, title, author, category, isRead = false) {
        this.id = id;               
        this.title = title;        
        this.author = author;      
        this.category = category;   
        this.isRead = isRead;
    }

    toggleReadStatus() {
        this.isRead = !this.isRead;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.nextId = 1; 
    }

   
    addBook(title, author, category) {
        const newBook = new Book(this.nextId++, title, author, category);
        this.books.push(newBook);
        return newBook;
    }

    
    removeBook(id) {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            return this.books.splice(index, 1)[0];
        }
        return null;
    }

   
    findBook(id) {
        return this.books.find(book => book.id === id) || null;
    }

    
    getBooksByCategory(category) {
        return this.books.filter(book => book.category.toLowerCase() === category.toLowerCase());
    }

    getBooks() {
        return this.books;
    }
}



const myLibrary = new Library();


myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", "Classic Fiction");
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", "Classic Fiction");
myLibrary.addBook("1984", "George Orwell", "Dystopian Sci-Fi");
myLibrary.addBook("Dune", "Frank Herbert", "Dystopian Sci-Fi");


console.log("All Library Books:");
console.table(myLibrary.getBooks());


console.log("\nBooks in 'Dystopian Sci-Fi' category:");
console.table(myLibrary.getBooksByCategory("Dystopian Sci-Fi"));

myLibrary.removeBook(2);

console.log("\nLibrary After Removing Sequence ID 2:");
console.table(myLibrary.getBooks());