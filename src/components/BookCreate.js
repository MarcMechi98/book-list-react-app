import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
    const [title, setTitle] = useState('');
    const { createBook } = useBooksContext();

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createBook(title);

        // Cleaning up the search term after submission
        setTitle('');
    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <input className="input" value={title} onChange={handleChange} placeholder="Enter book title" />
                <button className="button">Add</button>
            </form>
        </div>
    )
}

export default BookCreate;

