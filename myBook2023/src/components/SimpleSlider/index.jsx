import React from "react"
import { Link } from "react-router-dom"
import { Btn } from '../../components/Btn'
import Slider from "react-slick"
import mockupF from '../../assets/mockup01.png'
import mockupL from '../../assets/mockup02.png'
import mockupS from '../../assets/mockup03.png'
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
      <div className={`container${ mediaQuery816 ? '' : ' mobile'} bg-freepry`}>
          <h2>Dernière réalisation</h2>
          <h1 className='title'>freepry</h1>
          <Link className='image' to={'projet/freepry'}>
            <img src={mockupF}/>
          </Link>
          <p className='subtitle'>Refonte de l’onglet “reprise d’un article”</p>
          <div className='cta'>
            <div className='description'>
              <div className='name'>freepry</div>
              <div className='details'>Freepry c’est la solution digitale destinée aux boutiques de vétement dans la seconde main. Elle met à disposition une solution clé en main permettant d’optimiser la reprise et la revente des produits d'occasions.
              </div>
            </div>
            <div className='projects'>
              <Btn text={"Voir tous les projets"} link={"projets"}/>
            </div>
          </div>
        </div>

        <div className={`container${ mediaQuery816 ? '' : ' mobile'} bg-lichess`}>
          <h2>Dernière réalisation</h2>
          <h1 className='title'>lichess</h1>
          <Link className='image' to={'projet/freepry'}>
            <img src={mockupL}/>
          </Link>
          <p className='subtitle'>Refonte du plateau de jeu </p>
          <div className='cta'>
            <div className='description'>
              <div className='name'>lichess</div>
              <div className='details'>Lichess.org est une plateforme de jeu d’échec en ligne open-source destinée aux passionnés. Cette plateforme propose différents services : lancer une partie, participer à de grands tournois, suivre des compétitions.
              </div>
            </div>
            <div className='projects'>
              <Btn text={"Voir tous les projets"} link={"projets"}/>
            </div>
          </div>
        </div>

        <div className={`container${ mediaQuery816 ? '' : ' mobile'} bg-socoon`}>
          <h2>Dernière réalisation</h2>
          <h1 className='title'>socoon</h1>
          <Link className='image' to={'projet/freepry'}>
            <img src={mockupS}/>
          </Link>
          <p className='subtitle'>Refonte du parcours d’inscription</p>
          <div className='cta'>
            <div className='description'>
              <div className='name'>socoon</div>
              <div className='details'>Socoon est une application web et mobile mettant en relation des séniors avec des personnes proches de leur domicile pour la réalisation de service ponctuel gratuit ou payant.
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