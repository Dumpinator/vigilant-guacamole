import { useState } from 'react'
import { Card } from '../../components/Card'
import {SimpleSlider} from '../../components/SimpleSlider'
import { Footer } from '../../components/Footer/index.jsx'
import './index.scss'

export function Home({mediaQuery816}) {

  const [cards, _] = useState([
    {
      title: "discovery",
      text: "Analyse heuristique, interviews, tests utilisateurs, empathy map, userflow.",
      icon: "search",
      tags: ["Fijam", "Miro"],
      color: "#DD69D1"
    },
    {
      title: "découpage",
      text: "Rédaction des users stories, comportement technique attendu, épics et features.",
      icon: "cut",
      tags: ["Notion", "Github Project"],
      color: "#62B6AB"
    },
    {
      title: "librairie",
      text: "Création d’un KIT UI contenant les composants et les variants.",
      icon: "lib",
      tags: ["Figma"],
      color: "#EFC644"
    },
  ])

  return (
    <div className='home__container'>
      <div className='section-1'>
          <div className={`container ${ mediaQuery816 ? 'mobile' : ''}`}>
            <div className='hero'>
              <h1>DESIGNER</h1>
              <h1>UX & UI</h1>
              <p>Hello, moi c’est Delphine et je vous souhaite la bienvenue !</p>
              <p>Passionnée de design et d'interfaces.</p>
              <p>Je vous laisse découvrir mon univers et mon parcours.</p>
            </div>
            <div className='popup'>
                  <img src='picture.png'/>
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
          </div>
      </div>
      <div className='section-2'>
        
        <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
          <div className='left'>
            {
              cards.map(({ title, text, icon, tags, color }, index) =>
                <div key={index+Date.now()} className={`row${ mediaQuery816 ? '' : ' mobile'}`}>
                  <Card title={title} text={text} icon={icon} tags={tags} color={color} />
                </div>
              )
            }
          </div>
          <div className={`right${ mediaQuery816 ? '' : ' mobile'}`}>
          <h2>J’apporte mon pixel à l’édifice</h2>
            <div className='text'>
              <p>Durant mes dernières expériences professionnelles, j'ai travaillé essentiellement sur des produits de type SAAS. Pour la plupart des missions qui m’ont été 
                confiées, il s’agissait de me focaliser sur une refonte partielle ou totale d’un ou plusieurs parcours utilisateurs. Pour les utilisateurs, je devais réaliser 
                des interfaces qui puissent répondre à des problématiques majeures et proposer une navigation simple et intuitive.</p>
              <p>J’ai mis en place plusieurs plans d’action pour mener à bien l’ensemble de mes projets. Aller à la rencontre des utilisateurs pour mieux comprendre leurs 
                besoins, créée des prototypages interactifs et fonctionnels dans le but de tester auprès d’eux la faisabilité de nouvelles propositions et itérer lorsque 
                c’est nécessaire.</p>
                <p>
                Afin de faciliter le travail entre les collaborateurs, j’ai pris en charge la création des kits UI. Ces librairies nous ont permis de mieux s’organiser entre 
                nous. Grâce à une  architecture visuelle complète et détaillée, il était plus facile de suivre en temps réel l’évolution du produit et de ses composants.
                </p>
            </div>
          </div>
        </div>
      </div>

      <div className='section-3'>
        <SimpleSlider mediaQuery816={mediaQuery816} />
      </div>
     <Footer mediaQuery816={mediaQuery816} />
    </div>
  )
}