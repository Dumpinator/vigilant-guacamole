import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
export const MainLayout = ({ mediaQuery816 }) => {
  return (
    <>
        <Navbar mediaQuery816={mediaQuery816}/>
        <Outlet />
    </>
  )
}