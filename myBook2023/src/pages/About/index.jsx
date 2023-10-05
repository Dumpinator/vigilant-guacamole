import { useState } from 'react'
import { Footer } from '../../components/Footer/index.jsx'
import { Card } from '../../components/Card'
import moi from '../../assets/moi.jpg';
import './index.scss'

export function About({mediaQuery816}) {


  const [cards, setCards] = useState([
    {
      title: "Côté startup",
      text: "L’expérience en startup m’a permis de devenir plus autonome et de mieux gérer les contraintes. C’est  un environnement challengeant où j’ai pu être force de proposition dans les projets entrepris.",
      icon: "star",
      tags: [],
      color: "#DD69D1"
    },
    {
      title: "En agence",
      text: "Je me suis imprégnée du rythme soutenu de l’agence avec des projets diversifiés, des clients différents et un service organisé.  C’est aussi un milieu où je me suis davantage spécialisée dans le design d’interfaces.",
      icon: "star",
      tags: [],
      color: "#EFC644"
    }
  ])

  return (
    <div className='about__container'>
      <div className='section-1'>
          <div className={`container ${ !mediaQuery816 ? 'mobile' : ''}`}>
            <div className='popup'>
                    <img src={moi}/>
                    <div className='background__img' />
                <div className='popup__cach'>
                  <div className='toto'>
                    <div className='to'></div>
                  </div>
                  <div className='tutu'>
                    <div className='tu'></div>
                  </div>
                </div>
              </div>
              <div className='hero'>
                <h1>Mon parcours</h1>
                <p>
                  Avant de m’immerger dans l’univers du design en 2018, je démarre ma carrière professionnelle en tant que travailleur social.
                </p>
                <p className='custom'>
                  Très vite, je démarre une reconversion professionnelle car j’aspire à un <span>métier artistique</span>.</p>
                  <p>
                   L’informatique est aussi un domaine qui m’a toujours passionnée et 
                  je prends vite conscience de l’évolution qui peut s’offrir à moi dans ce domaine. Je ne réfléchis pas trop longtemps, je saute le pas !
                </p>
                <p>
                  J’intègre Hetic en 2018 pour un cursus de 3 ans. J’apprends toutes les bases et les fondements du web et je consolide dès ma première année mon apprentissage avec 
                  des stages en entreprises et une année d’alternance en fin d’étude.
                </p>
                <p className='custom'>
                  Diplômée en 2022, je démarre ma carrière en tant qu’<span>UX & UI designer</span>.
                </p>
              </div>
            </div>
      </div>
      <div className='section-2'>
        <h2>Mes environnements de travail</h2>
        <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
          <div className={`right${ mediaQuery816 ? '' : ' mobile'}`}>
            <div className='text'>
              <h3>RETAILS</h3>
              <p>
                Sensibilisé des entreprises de la mode à l’environnement et l’éco-responsabilité grâce à un outil de gestion de vente et de reprise de produits de seconde main.
              </p>
              <h3>SERVICE</h3>
              <p>
                Une application solidaire à destination des séniors et de leurs aidants afin de faciliter les actes de la vie quotidienne.
              </p>
              <h3>MARKETING MOBILE</h3>
              <p>
                Accompagnement des entreprises dans leurs stratégies marketing grâce à un logiciel de création de jeu concours sur mobile.
              </p>
            </div>
          </div>
          <div className='left'>
            {
              cards.map(({ title, text, icon, tags, color }, index) =>
                <div key={index+Date.now()} className={`row${ mediaQuery816 ? '' : ' mobile'}`}>
                  <Card title={title} text={text} icon={icon} tags={tags} color={color} />
                </div>
              )
            }
          </div>
        </div>
      </div>

     <Footer mediaQuery816={mediaQuery816} />
    </div>
  )
}