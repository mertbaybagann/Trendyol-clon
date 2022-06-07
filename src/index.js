import React from "react";

import "./variables.scss";
import "the-new-css-reset";
import ReactDOM from "react-dom/client";
import AppRouter from "./Routers/AppRouter";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRouter />);
