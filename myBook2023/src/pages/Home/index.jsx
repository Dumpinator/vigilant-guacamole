import { useState } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom"
import './index.scss'

export function Home() {

  return (
    <div className='home__container'>
      <div className='section-1'>
          <div className='container'>
            <header className='header__content'>
              <div className='title'>
                <span>PORT</span>
                <span>FOLIO</span>
                <p>Hello, je m’appelle Delphine et je suis basée à Paris! Passionnée par le design d’interface, 
                  j’exerce ce métier depuis 5ans. Je vous laisse découvrir mon univers et mon parcours.
                </p>
              </div>
              <div className='test'>
                <div className='toto'>
                  <div className='to'></div>
                </div>
                <div className='tutu'>
                  <div className='tu'></div>
                </div>
              </div>
            </header>
          </div>
      </div>
      <div className='section-2'>
        <div className='left'>
          <div className='card'></div>
          <div className='card'></div>
          <div className='card'></div>
        </div>
        <div className='right'></div>
      </div>
    </div>
  )
}