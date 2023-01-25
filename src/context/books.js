import { createContext, useState, useCallback } from "react";
import axios from "axios";

// Creating the Context Object
const BooksContext = createContext();

// Provider Component
function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    }, []);

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', { title });
        // post é um method que eu preciso adicionar algo na request
        // nesse caso, to adicionando um object de key title e value title

        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    }

    const deleteBookById = async (targetId) => {
        const response = await axios.delete(`http://localhost:3001/books/${targetId}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== targetId;
        });
        setBooks(updatedBooks);
    }

    const editBookById = async (targetId, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${targetId}`, {
            title: newTitle
        });

        const updatedBooks = books.map((book) => {
            if (book.id === targetId) {
                return {
                    ...book,
                    ...response.data
                    // This is the updated book object that came back from the api
                }
            }
            return book;
        });

        setBooks(updatedBooks);
    }

    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {/* Os components que eu colocar dentro do provider vão ter acesso
            ao que ta dentro do value */}
            {children}
        </BooksContext.Provider>
    )

}

// A property Provider foi passada por destructuring
export { Provider };
export default BooksContext;
// Pra importar os dois ao mesmo tempo:
// import { Provider }, BooksContext from 'filepath'