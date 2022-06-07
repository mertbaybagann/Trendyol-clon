import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

function AppRouter() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
