import BookCreate from "./components/BookCreate";
import { useState } from "react";

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        console.log(`Need to add the book called: ${title}`);
    }

    // const editBook = () => {

    // }

    // const deleteBook = () => {

    // }

    return (
        <div>
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App;