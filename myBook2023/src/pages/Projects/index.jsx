import { Link } from "react-router-dom"
import { Footer } from '../../components/Footer/index.jsx'
import mockupF1 from '../../assets/mockup01.png'
import mockupF2 from '../../assets/mockup02.png'
import mockupL from '../../assets/mockup03.png'
import mockupS from '../../assets/mockup04.png'
import './index.scss'

export function Projects({mediaQuery816}) {

  return (
    <div className='projects__container'>

        <div className={`container${ mediaQuery816 ? '' : ' mobile'} bg-freepry1`}>
          <h1 className='title'>freepry</h1>
          <Link className='image' to={'/projet/freepry1'}>
            <img src={mockupF1}/>
          </Link>
          <p className='subtitle'>Refonte de l’onglet “reprise d’un article”</p>
          <div className='cta'>
            <div className='description'>
              <div className='name'>freepry</div>
              <div className='details'>Freepry c’est la solution destinée aux boutiques pour se lancer dans la seconde main.
                Elle met à disposition une solution clé en main  permettant d’optimiser la reprise et la revente des produits de seconde main grâce à un algorithme de reprise.
              </div>
            </div>
          </div>
        </div>

        <div className={`container${ mediaQuery816 ? '' : ' mobile'} bg-freepry2`}>
          <h1 className='title'>freepry</h1>
          <Link className='image' to={'/projet/freepry2'}>
            <img src={mockupF2}/>
          </Link>
          <p className='subtitle'>Création d’un back-office</p>
          <div className='cta'>
            <div className='description'>
              <div className='name'>freepry</div>
              <div className='details'>C’est une solution destinée aux boutiques pour se lancer dans la seconde main. Elle met à disposition un outil clé en main  permettant 
                d’optimiser la reprise et la revente des produits de seconde main grâce à un algorithme de reprise.
              </div>
            </div>
          </div>
        </div>

        <div className={`container${ mediaQuery816 ? '' : ' mobile'} bg-lichess`}>
          <h1 className='title'>lichess</h1>
          <Link className='image' to={'/projet/lichess'}>
            <img src={mockupL}/>
          </Link>
          <p className='subtitle'>Refonte du plateau de jeu </p>
          <div className='cta'>
            <div className='description'>
              <div className='name'>lichess</div>
              <div className='details'>Lichess.org est une plateforme de jeu d’échec en ligne open-source destinée aux passionnés.
                Cette plateforme propose différents services : lancer une partie, participer à de grands tournois, suivre des compétitions.
              </div>
            </div>
          </div>
        </div>

     <Footer mediaQuery816={mediaQuery816} />
    </div>
  )
}