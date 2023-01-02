import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', { title });
        // post é um method que eu preciso adicionar algo na request
        // nesse caso, to adicionando um object de key title e value title

        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    }

    const deleteBookById = (targetId) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== targetId;
        });
        setBooks(updatedBooks);
    }

    const editBookById = (targetId, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === targetId) {
                return {
                    ...book,
                    title: newTitle
                }
            }
            return book;
        });
        setBooks(updatedBooks);
    }

    return (
        <div className="app">
            <h1 >Reading List</h1>
            <BookList listOfBooks={books} onEdit={editBookById} onDelete={deleteBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App;