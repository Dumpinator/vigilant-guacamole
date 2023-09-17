import React from "react"
import { Link } from "react-router-dom"
import { Btn } from '../../components/Btn'
import Slider from "react-slick"
import mockup from '../../assets/mockup.png'
import './styles.scss'

export const SimpleSlider = ({mediaQuery816}) => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true
  };
  return (
    <Slider {...settings}>
      <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
          <h1 className='title'>freepry</h1>
          <Link className='image' to={'projet/freepry'}>
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
            <div className='projects'>
              <Btn text={"Voir tous les projets"} link={"projets"}/>
            </div>
          </div>
        </div>
        <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
          <h1 className='title'>fastory</h1>
          <Link className='image' to={'projet/freepry'}>
            <img src={mockup}/>
          </Link>
          <p className='subtitle'>Refonte du back-office et du builder de jeu</p>
          <div className='cta'>
            <div className='description'>
              <div className='name'>fastory</div>
              <div className='details'>Lorem ipsum dolor sit amet consectetur. Cursus vel eget convallis sed aliquam lacus massa.
                Pharetra tellus porttitor nibh velit viverra. Sed dui eu faucibus
              </div>
            </div>
            <div className='projects'>
              <Btn text={"Voir tous les projets"} link={"projets"}/>
            </div>
          </div>
        </div>
        <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
          <h1 className='title'>lichess</h1>
          <Link className='image' to={'projet/freepry'}>
            <img src={mockup}/>
          </Link>
          <p className='subtitle'>Refonte du plateau de jeu </p>
          <div className='cta'>
            <div className='description'>
              <div className='name'>lichess</div>
              <div className='details'>Lorem ipsum dolor sit amet consectetur. Cursus vel eget convallis sed aliquam lacus massa.
                Pharetra tellus porttitor nibh velit viverra. Sed dui eu faucibus
              </div>
            </div>
            <div className='projects'>
              <Btn text={"Voir tous les projets"} link={"projets"}/>
            </div>
          </div>
        </div>
    </Slider >
  );
}