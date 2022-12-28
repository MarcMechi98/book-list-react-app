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
        <div>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={handleChange} placeholder="Enter book title" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default BookCreate;

