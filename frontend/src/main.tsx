import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import client from "./urql";
import { Provider } from "urql";

ReactDOM.render(
    <React.StrictMode>
        <Provider value={client}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);
