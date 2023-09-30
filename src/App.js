import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Inventario from "./components/Inventario";
import { IntlProvider } from "react-intl";
import localeEs from "./locales/es.json";
import localeEn from "./locales/en.json";
import { useState, useEffect } from 'react';
import Navbar2  from "./components/Navbar2"
// url JSON: https://raw.githubusercontent.com/NICOMB22/Parcial1Web/main/datos.json

function App() {

  const [locale, setLocale] = useState(navigator.language);
  const [localeMsgs, setLocaleMsgs] = useState({});

  useEffect(() => {
    if (locale.startsWith("en")) setLocaleMsgs(localeEn);
    else setLocaleMsgs(localeEs);    
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={localeMsgs}>
    <BrowserRouter>
    <Navbar2         
        locale = {locale}
        setLocale = {setLocale}/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inventario" element={<Inventario />} />
      </Routes>
    </BrowserRouter>
    </IntlProvider>
  );


}

export default App;
