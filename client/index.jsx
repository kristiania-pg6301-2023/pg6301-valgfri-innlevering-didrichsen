import React from "react";
import ReactDOM from "react-dom/client"
import MessageApplication from "./components/MessageApplication";
import {BrowserRouter} from "react-router-dom";

import "./application.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <MessageApplication/>
    </BrowserRouter>);