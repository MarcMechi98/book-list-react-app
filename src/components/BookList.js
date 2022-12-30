import BookShow from './BookShow';

function BookList({ listOfBooks, onDelete }) {
    const renderedBooks = listOfBooks.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} />;
    })

    return (
        <div className='book-list'>
            {renderedBooks}
        </div>
    )
}

export default BookList;