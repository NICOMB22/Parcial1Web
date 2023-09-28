import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Inventario from "./components/Inventario";
// url JSON: https://raw.githubusercontent.com/NICOMB22/Parcial1Web/main/datos.json

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inventario" element={<Inventario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
