import BookCreate from "./components/BookCreate";
import { useState } from "react";

function App() {
    const [book, setBook] = useState('');

    return (
        <div>
            <BookCreate />

        </div>
    )
}

export default App;