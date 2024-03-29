import Slider from "react-slick"
import { Footer } from '../../components/Footer/index.jsx'
import c01 from "/slide01.jpg"
import c02 from "/slide02.jpg"
import c03 from "/slide03.jpg"
import c04 from "/slide04.jpg"
import c05 from "/slide05.jpg"
import c06 from "/slide06.jpg"
import mockupC from '../../assets/mockupLab01.png'
import './index.scss'
import {Card2} from "../../components/Card2/index.jsx";

// eslint-disable-next-line react/prop-types
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
              <h2>le lab</h2>
              <p className='first'>Cette page est dédiée à des projets de dimension plus petite. Je souhaite améliorer mes compétences en UI et quotidiennement ces projets 
                m’aident à y parvenir. Rien de mieux que de m’initier sur des exercices innovants et ludiques !
              </p>
              <div className="slider__content">
                <h1>The Cacatoes Theory</h1>
                  <Slider {...settings}>

                    <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
                      <div className='slid'>
                        <Card2 bg={c01}></Card2>
                        <h2 className="details"></h2>
                      </div>
                    </div>

                    <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
                      <div className='slid'>
                        <Card2 bg={c02}></Card2>
                        <h2 className="details"></h2>
                      </div>
                    </div>

                    <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
                      <div className='slid'>
                        <Card2 bg={c03}></Card2>
                        <h2 className="details"></h2>
                      </div>
                    </div>

                    <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
                      <div className='slid'>
                        <Card2 bg={c04}></Card2>
                        <h2 className="details"></h2>
                      </div>
                    </div>

                    <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
                      <div className='slid'>
                        <Card2 bg={c05}></Card2>
                        <h2 className="details"></h2>
                      </div>
                    </div>

                    <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
                      <div className='slid'>
                        <Card2 bg={c06}></Card2>
                        <h2 className="details"></h2>
                      </div>
                    </div>

                  </Slider>
                </div>
              </div>
          </div>
      </div>

      <div className='section-2'>
        <div className='projects__container'>
          <div className={`container${ mediaQuery816 ? '' : ' mobile'} bg-freepry1`}>
            <h1 className='title'>cemantix</h1>
            <div className='image'>
              <img src={mockupC} alt="screen"/>
            </div>
          </div>
        </div>
      </div>

     <Footer mediaQuery816={mediaQuery816} />
    </div>
  )
}