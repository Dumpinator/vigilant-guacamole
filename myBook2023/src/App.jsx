import { Routes, Route, Outlet, Link } from "react-router-dom";
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home';

function App() {

  return (
    <Routes>
      <Route element={<MainLayout/> }>
        <Route path="/" element={<Home/>} />
        <Route path="/projets" element={<div>projets</div>} />
        <Route path="/about" element={<div>about</div>} />
        <Route path="/contact" element={<div>contact</div>} />
      </Route >

      <Route path="*" element={<div>error 404</div>} />
    </Routes>
  )
}

export default App
