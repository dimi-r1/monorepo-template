import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import ComparablesCore from "./Components/ComparablesCore/ComparablesCore";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <ComparablesCore />
    </React.StrictMode>
);
