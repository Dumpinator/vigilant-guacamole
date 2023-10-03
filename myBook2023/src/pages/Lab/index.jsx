import Slider from "react-slick"
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer/index.jsx'
import c01 from "/slide01.jpg"
import c02 from "/slide02.jpg"
import c03 from "/slide03.jpg"
import c04 from "/slide04.jpg"

import './index.scss'

export function Lab({mediaQuery816}) {

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 500,
  }

  return (
    <div className='lab__container'>
      <div className='section-1'>
          <div className={`container ${ !mediaQuery816 ? 'mobile' : ''}`}>
            <div className='hero'>
              <p className='first'>Cette page est dédiée à des projets de dimension plus petite. Je souhaite améliorer mes compétences en UI et 
                quotidiennement ces projets m’aident à y parvenir. Rien de mieux que de m’initier sur des exercices innovants et ludiques !
              </p>
              <h1>The Cacatoes Theory</h1>
              <Slider {...settings}>

                <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
                  <div className='slid'>
                    <Card bg={c01}></Card>
                    <h2 className="details"></h2>
                  </div>
                </div>

                <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
                  <div className='slid'>
                    <Card bg={c02}></Card>
                    <h2 className="details"></h2>
                  </div>
                </div>

                <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
                  <div className='slid'>
                    <Card bg={c03}></Card>
                    <h2 className="details"></h2>
                  </div>
                </div>

                <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
                  <div className='slid'>
                    <Card bg={c04}></Card>
                    <h2 className="details"></h2>
                  </div>
                </div>

              </Slider>
            </div>
          </div>
      </div>

     <Footer mediaQuery816={mediaQuery816} />
    </div>
  )
}