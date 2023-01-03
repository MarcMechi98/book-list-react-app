import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
    const [count, setCount] = useState(5);

    const valueToShare = {
        count,
        incrementCount: () => {
            setCount(count + 1);
        }
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {/* Os components que eu colocar dentro do provider vão ter acesso
            ao que ta dentro do value */}
            {children}
        </BooksContext.Provider>
    )

}

// A property Provider foi passada por destructuring
export { Provider };
export default BooksContext;
// Pra importar os dois ao mesmo tempo:
// import { Provider }, BooksContext from 'filepath'