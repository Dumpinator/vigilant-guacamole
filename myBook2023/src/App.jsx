import React, { useEffect } from "react"
import { Routes, Route, Outlet, Link } from "react-router-dom"
import { useMediaQuery } from './hooks/useMediaQuery'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { About } from "./pages/About"

function App() {

  const mediaQuery816 = useMediaQuery("(min-width: 816px)")

  useEffect(() => {
  }, [mediaQuery816]);

  return (
    <Routes>
      <Route element={<MainLayout children={undefined}/> }>
        <Route path="/" element={<Home mediaQuery816={mediaQuery816} />} />
        <Route path="/projet/:slug" element={<div>projets slug</div>} />
        <Route path="/projets" element={<Projects  mediaQuery816={mediaQuery816} />} />
        <Route path="/about" element={<About mediaQuery816={mediaQuery816} />} />
        <Route path="/lelab" element={<div>le lab</div>} />
      </Route>

      <Route path="*" element={<div>error 404</div>} />
    </Routes>
  )
}

export default App
