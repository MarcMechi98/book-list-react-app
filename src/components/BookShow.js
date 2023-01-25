import { useState } from "react";
import BookEdit from './BookEdit';
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
    const { deleteBookById } = useBooksContext();
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    }

    // Showing/hiding the edit button
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    // After submitting the changes, the "edit mode" goes away
    const handleSubmit = () => {
        setShowEdit(false);
    }

    // Switching between normal view and edit mode
    let content = <h3>{book.title}</h3>;

    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />;
    }

    return (
        // BOOK CARD
        <div className="book-show">
            {/* Book image */}
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book"></img>

            {/* Normal book title or edit mode */}
            <div>{content}</div>

            {/* Buttons */}
            <div className="actions">
                <button className="edit" onSubmit={handleSubmit} onClick={handleEditClick}>
                    Edit
                </button>

                <button className="delete" onClick={handleDeleteClick}>
                    X
                </button>
            </div>

        </div>
    )
}

export default BookShow;