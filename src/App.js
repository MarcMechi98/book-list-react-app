import BookCreate from "./components/BookCreate";
import { useState } from "react";

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            {
                id: Math.floor(Math.random() * 9999),
                title
            }
            // Só escrever title é uma shorthand pra title: title
        ];
        setBooks(updatedBooks);
    }

    // const editBook = () => {

    // }

    // const deleteBook = () => {

    // }

    return (
        <div>
            {books.length}
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App;