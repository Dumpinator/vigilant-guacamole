import React from "react"
import { Link } from "react-router-dom"
import { Btn } from '../../components/Btn'
import Slider from "react-slick"
import mockupF1 from '../../assets/mockup01.png'
import mockupF2 from '../../assets/mockup02.png'
import mockupL from '../../assets/mockup03.png'
import mockupS from '../../assets/mockup04.png'
import './styles.scss'

export const SimpleSlider = ({mediaQuery816}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      <div className={`container${ mediaQuery816 ? '' : ' mobile'} bg-freepry1`}>
          <h2>Dernières réalisations</h2>
          <h1 className='title'>freepry</h1>
          <Link className='image' to={'projet/freepry1'}>
            <img src={mockupF1}/>
          </Link>
          <p className='subtitle'>Création d’un back-office</p>
          <div className='cta'>
            <div className='description'>
              <div className='name'>freepry</div>
              <div className='details'>C’est une solution destinée aux boutiques pour se lancer dans la seconde main. Elle met à disposition un outil clé en main  permettant 
              d’optimiser la reprise et la revente des produits de seconde main grâce à un algorithme de reprise. 
              </div>
            </div>
            <div className='projects'>
              <Btn text={"Voir tous les projets"} link={"projets"}/>
            </div>
          </div>
        </div>

        <div className={`container${ mediaQuery816 ? '' : ' mobile'} bg-freepry2`}>
          <h2>Dernières réalisations</h2>
          <h1 className='title'>freepry</h1>
          <Link className='image' to={'projet/freepry2'}>
            <img src={mockupF2}/>
          </Link>
          <p className='subtitle'>Refonte de l’onglet “reprise d’un article”</p>
          <div className='cta'>
            <div className='description'>
              <div className='name'>freepry</div>
              <div className='details'>C’est une solution destinée aux boutiques pour se lancer dans la seconde main. Elle met à disposition un outil clé en 
              main permettant d’optimiser la reprise et la revente des produits de seconde main grâce à un algorithme de reprise.
              </div>
            </div>
            <div className='projects'>
              <Btn text={"Voir tous les projets"} link={"projets"}/>
            </div>
          </div>
        </div>

        <div className={`container${ mediaQuery816 ? '' : ' mobile'} bg-lichess`}>
          <h2>Dernières réalisations</h2>
          <h1 className='title'>lichess</h1>
          <Link className='image' to={'projet/freepry'}>
            <img src={mockupL}/>
          </Link>
          <p className='subtitle'>Refonte du plateau de jeu </p>
          <div className='cta'>
            <div className='description'>
              <div className='name'>lichess</div>
              <div className='details'>Lichess.org est une plateforme de jeu d’échecs en ligne open-source et destinée aux passionnés. Il propose plusieurs services à ses 
              utilisateurs : lancement d'une partie, participation à de grands tournois et le suivi des compétitions.
              </div>
            </div>
            <div className='projects'>
              <Btn text={"Voir tous les projets"} link={"projets"}/>
            </div>
          </div>
        </div>

        <div className={`container${ mediaQuery816 ? '' : ' mobile'} bg-socoon`}>
          <h2>Dernières réalisations</h2>
          <h1 className='title'>socoon</h1>
          <Link className='image' to={'projet/freepry'}>
            <img src={mockupS}/>
          </Link>
          <p className='subtitle'>Refonte du parcours d’inscription</p>
          <div className='cta'>
            <div className='description'>
              <div className='name'>socoon</div>
              <div className='details'>Socoon est une application web et mobile mettant en relation des séniors avec des personnes proches de leur domicile. La plateforme permet 
                la réalisation de services divers (aide aux courses, jardinage, aide à la toilette, aide administrative).
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