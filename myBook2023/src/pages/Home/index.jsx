import { useState } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom"
import './index.scss'

export function Home() {

  return (
    <div className='home__container'>
      <div className='section-1'>
          <div className='container'>
            <div className='hero'>
              <p>Hello, moi c'est Delphine</p>
              <h1>Designer</h1>
              <h1>UX UI</h1>
              <p>Je suis une passionnée de design et j’aime confectionner de nouvelles interfaces. J’exerce ce métier depuis 5 ans. Je vous laisse découvrir mon univers et mon parcours.</p>
            </div>
            <div className='popup'>
                  <img src='test.png'/>
                  <div className='background__img' />
              <div className='test'>
                <div className='toto'>
                  <div className='to'></div>
                </div>
                <div className='tutu'>
                  <div className='tu'></div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='section-2'>
        <h2>J’apporte mon pixel à l’édifice</h2>
        <div className='container'>
          <div className='left'>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
          </div>
          <div className='right'>
            <div className='text'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis quo qui 
                ratione iusto ducimus! Ad animi aspernatur aliquid, neque quia molestiae placeat voluptatem quaerat. Enim velit architecto assumenda molestias.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis quo qui 
                ratione iusto ducimus! Ad animi aspernatur aliquid, neque quia molestiae placeat voluptatem quaerat. Enim velit architecto assumenda molestias.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}