import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Header from "../components/Header/Header";

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
