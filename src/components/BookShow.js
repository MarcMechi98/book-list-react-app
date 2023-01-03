import { useState } from "react";
import BookEdit from './BookEdit';
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
    const { deleteBookById } = useBooksContext();
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        deleteBookById(book.id);
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
        content = <BookEdit book={book} onSubmit={handleSubmit} />;
    }

    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="random book"></img>
            <div>{content}</div>

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