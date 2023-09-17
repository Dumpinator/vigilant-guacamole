import { useState } from 'react'
import { Footer } from '../../components/Footer/index.jsx'
import { Card } from '../../components/Card'
import moi from '../../assets/moi.jpg';
import './index.scss'

export function About({mediaQuery816}) {


  const [cards, setCards] = useState([
    {
      title: "Côté startup",
      text: "Le monde de la  startup m’a permis de devenir plus autonome et de mieux gérer les contraintes internes. C’était un environnement challengeant et où l’esprit d’équipe était primordial pour mener à bien tous mes projets. ",
      icon: "toto",
      tags: [],
      color: "#DD69D1"
    },
    {
      title: "En agence",
      text: "Je me suis imprégnée du rythme soutenu en agence avec des projets diversifiés, plusieurs clients et un service organisé.  C’est aussi un milieu où l’on est spécialisée, j’ai ainsi pu me perfectionner sur un seul champ de compétence. ",
      icon: "toto",
      tags: [],
      color: "#62B6AB"
    }
  ])


  return (
    <div className='about__container'>
      <div className='section-1'>
          <div className={`container ${ mediaQuery816 ? 'mobile' : ''}`}>
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
                <h1>À propos</h1>
                <p>
                  Avant d’intégrer le secteur de la tech, je me suis formée au métier du social. 
                  Après ces quelques expériences et le sentiment d’une carrière inachevée, en 2018 je décide de chambouler ma carrière professionnnelle.
                </p>
                <p>
                C’est en 2018 que le monde du digital attise ma curiosité.  J’intègre l’école Hetic pour une cursus de 3 ans. J’apprendrais toutes les bases et les fondements du web : 
                le design, le développement, le marketing , le référencement ... 
                </p>
                <p>
                  Mais le design était une évidence, c’est dans ce domaine que je me suis laissée porté! 
                </p>
              </div>
            </div>
      </div>
      <div className='section-2'>
        <h2>Mes environnements de travail</h2>
        <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
          <div className={`right${ mediaQuery816 ? '' : ' mobile'}`}>
            <div className='text'>
              <p>Ma pratique du design dans les différents secteurs d’activité.</p>
              <p>Le retail : sensibilisé  les entreprises du textile à l’environnement et l’éco-responsabilité grâce à un outil de gestion de vente et de reprise de produits de seconde main.</p>
              <p>Le service :  une application solidaire à destination des séniors et de leurs aidants afin de faciliter les actes de leur vie quotidienne.</p>
              <p>Le marketing mobile :  accompagné les entreprises dans leurs stratégies marketing grâce à un logiciel de création de jeu concours sur mobile.</p>
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