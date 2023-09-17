import { useState } from 'react'
import { Link } from "react-router-dom"
import { Footer } from '../../components/Footer/index.jsx'
import mockup from '../../assets/mockup.png'
import './index.scss'

export function Projects({mediaQuery816}) {

  return (
    <div className='projects__container'>

      <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
          <h1 className='title'>freepry</h1>
          <Link className='image' to={'/projet/freepry'}>
            <img src={mockup}/>
          </Link>
          <p className='subtitle'>Refonte de l’onglet “reprise d’un article”</p>
          <div className='cta'>
            <div className='description'>
              <div className='name'>freepry</div>
              <div className='details'>Lorem ipsum dolor sit amet consectetur. Cursus vel eget convallis sed aliquam lacus massa.
                Pharetra tellus porttitor nibh velit viverra. Sed dui eu faucibus
              </div>
            </div>
          </div>
        </div>

        <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
          <h1 className='title'>lichess</h1>
          <Link className='image' to={'/projet/freepry'}>
            <img src={mockup}/>
          </Link>
          <p className='subtitle'>Refonte du “plateau de jeu”</p>
          <div className='cta'>
            <div className='description'>
              <div className='name'>freepry</div>
              <div className='details'>Lorem ipsum dolor sit amet consectetur. Cursus vel eget convallis sed aliquam lacus massa.
                Pharetra tellus porttitor nibh velit viverra. Sed dui eu faucibus
              </div>
            </div>
          </div>
        </div>

        <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
          <h1 className='title'>socoon</h1>
          <Link className='image' to={'/projet/freepry'}>
            <img src={mockup}/>
          </Link>
          <p className='subtitle'>“Application mobile sociale”</p>
          <div className='cta'>
            <div className='description'>
              <div className='name'>freepry</div>
              <div className='details'>Lorem ipsum dolor sit amet consectetur. Cursus vel eget convallis sed aliquam lacus massa.
                Pharetra tellus porttitor nibh velit viverra. Sed dui eu faucibus
              </div>
            </div>
          </div>
        </div>

        <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
          <h1 className='title'>fastory</h1>
          <Link className='image' to={'/projet/freepry'}>
            <img src={mockup}/>
          </Link>
          <p className='subtitle'>“marketing digital sur mobile”</p>
          <div className='cta'>
            <div className='description'>
              <div className='name'>freepry</div>
              <div className='details'>Lorem ipsum dolor sit amet consectetur. Cursus vel eget convallis sed aliquam lacus massa.
                Pharetra tellus porttitor nibh velit viverra. Sed dui eu faucibus
              </div>
            </div>
          </div>
        </div>

     <Footer mediaQuery816={mediaQuery816} />
    </div>
  )
}