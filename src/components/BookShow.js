import { useState } from "react";
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
        // lembra que o ! antes inverte o value atual
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>;

    if (showEdit) {
        content = <BookEdit book={book} onEdit={onEdit} onSubmit={handleSubmit} />;
    }

    return (
        <div className="book-show">
            <div>
                {content}
            </div>

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