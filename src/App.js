import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState } from "react";

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            {
                id: Math.floor(Math.random() * 9999),
                title
                // Só escrever title é uma shorthand pra title: title
            }
        ];
        setBooks(updatedBooks);
    }

    const deleteBookById = (targetId) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== targetId;
        });
        setBooks(updatedBooks);
    }

    return (
        <div className="app">
            <BookCreate onCreate={createBook} />
            <BookList listOfBooks={books} onDelete={deleteBookById} />
        </div>
    )
}

export default App;