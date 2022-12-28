function BookCreate() {
    const handleChange = (e) => {
        e.preventDefault();

    }

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleChange} placeholder='Enter book title' spellCheck={false} />
                <button>Submit</button>
            </form>
        </div >
    )
}

export default BookCreate;