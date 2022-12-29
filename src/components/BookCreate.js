import { useState } from "react";

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(title);

        // Serve pra limpar o input depois do user submit
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

