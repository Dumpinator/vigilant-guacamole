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
      color: "#62B6AB"
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
                Avant d’intégrer la Tech et le digital, j’ai commence ma carrière professionnelle en tant que travailleur social.
                Mais en 2018, je décide de démarrer une reconversion professionnelle et aspire à un nouveau métier.
                </p>
                <p>
                  Le web et le design attise rapidement ma curiosité et c’est dans ce domaine que je souhaite développer de nouvelles compétences.
                  J’intègre pour cela Hetic pour un cursus de 3 ans. J’ai appris toutes les bases et les fondements du web et consolide mon apprentissage au travers des stages et 
                  une année d’alternance  en fin d’étude.
                </p>
                <p>
                  Diplômée en 2022, je démarre mon activité en tant que UX & UI designer.
                </p>
              </div>
            </div>
      </div>
      <div className='section-2'>
        <h2>Mes environnements de travail</h2>
        <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
          <div className={`right${ mediaQuery816 ? '' : ' mobile'}`}>
            <div className='text'>
              <p>J’ai eu l’opportunité de développer mes compétences dans différents secteurs d’activités. 
                Ces expériences ont étés pour moi, l’occasion de découvrir plusieurs entreprises avec des produits différents
              </p>
              <p>Le retail : sensibilisé  les entreprises du textile à l’environnement et l’éco-responsabilité grâce à un outil de gestion de vente et de reprise 
                de produits de seconde main.
              </p>
              <p>
                Le service :  une application solidaire à destination des séniors et de leurs aidants afin de faciliter les actes de leur vie quotidienne.
              </p>
              <p>
                Le marketing mobile :  accompagné les entreprises dans leurs stratégies marketing grâce à un logiciel de création de jeu concours sur mobile.
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