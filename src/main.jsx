import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./context/index.js";
import { Provider } from "react-redux";
import Suspen from "./components/suspense/Suspen";

const App = lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <Suspense fallback={<Suspen />}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Suspense>
        </Provider>
    </React.StrictMode>
);
