import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create_product from "./Create_product";
import Edit from "./Edit";
import Showdata from "./Showdata";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create_product />} />
          <Route path="/show" element={<Showdata />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
