import { Link } from "react-router-dom"
import { Footer } from '../../components/Footer/index.jsx'
import mockup from '../../assets/mockup.png'
import './index.scss'

export function Projects({mediaQuery816}) {

  return (
    <div className='projects__container'>

        <div className={`container${ mediaQuery816 ? '' : ' mobile'} bg-freepry`}>
          <h1 className='title'>freepry</h1>
          <Link className='image' to={'/projet/freepry'}>
            <img src={mockup}/>
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

        <div className={`container${ mediaQuery816 ? '' : ' mobile'} bg-lichess`}>
          <h1 className='title'>lichess</h1>
          <Link className='image' to={'/projet/lichess'}>
            <img src={mockup}/>
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

        <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
          <h1 className='title'>socoon</h1>
          <Link className='image' to={'/projet/socoon'}>
            <img src={mockup}/>
          </Link>
          <p className='subtitle'>Refonte du parcours d’inscription</p>
          <div className='cta'>
            <div className='description'>
              <div className='name'>socoon</div>
              <div className='details'>Socoon est une application web et mobile mettant en relation des séniors avec des personnes proches de leur domicile pour 
                la réalisation de service ponctuel gratuit ou payant.
              </div>
            </div>
          </div>
        </div>

     <Footer mediaQuery816={mediaQuery816} />
    </div>
  )
}