import { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useMediaQuery } from './hooks/useMediaQuery'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home';
import React from "react";
import { Card } from "./components/Card";

function App() {

  const mediaQuery816 = useMediaQuery("(min-width: 816px)")

  useEffect(() => {
    console.log('mediaQueryList ', mediaQuery816);

  }, [mediaQuery816]);

  return (
    <Routes>
      <Route element={<MainLayout children={undefined}/> }>
        <Route path="/" element={<Home mediaQuery816={mediaQuery816} />} />
        <Route path="/projets" element={<div>projets</div>} />
        <Route path="/about" element={<div>about</div>} />
        <Route path="/contact" element={< Card />} />
      </Route>

      <Route path="*" element={<div>error 404</div>} />
    </Routes>
  )
}

export default App
