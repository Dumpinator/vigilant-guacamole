// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useMediaQuery } from './hooks/useMediaQuery'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { Project } from './pages/Project'
import { About } from "./pages/About"
import { Lab } from "./pages/lab"
import {Projects2} from "./pages/Projects2/index.jsx";

function App() {

  const mediaQuery816 = useMediaQuery("(min-width: 816px)")

  useEffect(() => {
  }, [mediaQuery816]);

  return (
    <Routes>
      <Route element={<MainLayout mediaQuery816={mediaQuery816}/> }>
        <Route path="/" element={<Home mediaQuery816={mediaQuery816} />} />
        <Route path="/projet/:slug" element={<Project  mediaQuery816={mediaQuery816} />} />
        <Route path="/projets" element={<Projects2  mediaQuery816={mediaQuery816} />} />
        <Route path="/about" element={<About mediaQuery816={mediaQuery816} />} />
        <Route path="/lelab" element={<Lab mediaQuery816={mediaQuery816} />} />
      </Route>

      <Route path="*" element={<div>error 404</div>} />
    </Routes>
  )
}

export default App
