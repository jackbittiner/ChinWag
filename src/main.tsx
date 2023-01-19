import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {setupWorker} from "msw";
import {handlers} from "./mocks/handlers";

const worker = setupWorker(...handlers);

async function prepare() {
    if (import.meta.env.DEV) {
        await import("../public/mockServiceWorker.js?worker");
        return worker.start();
    }
}

prepare().then(() => {
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    );
});