import { useState } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom"
import './index.scss'

export function Home() {

  return (
    <div className='home__container'>
      <div className='section-1'>
          <header className='header__content'>
            <div className='title'>
              <span>PORT</span>
              <span>FOLIO</span>
              <p>Hello, je m’appelle Delphine et je suis basée à Paris! Passionnée par le design d’interface, 
                j’exerce ce métier depuis 5ans. Je vous laisse découvrir mon univers et mon parcours.
              </p>
            </div>
          </header>
          <div className='header__content background'></div>
      </div>
    </div>
  )
}