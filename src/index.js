import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import './index.css';
import { Provider } from './context/books';

const element = document.querySelector('#root');
const root = ReactDOM.createRoot(element);

root.render(
    <Provider>
        <App />
    </Provider>
);