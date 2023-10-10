import { useState } from 'react'
import { Card } from '../../components/Card'
import {SimpleSlider} from '../../components/SimpleSlider'
import { Footer } from '../../components/Footer/index.jsx'
import { BsFillChatQuoteFill } from 'react-icons/bs'
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
              <div className='brand'>
                <BsFillChatQuoteFill />
                <p>
                  J’aime adopter une approche allant de l’analyse à la résolution de problèmes. 
                  Je cherche à comprendre le comportement des utilisateurs et apprendre les meilleures pratiques UX.
                </p>
              </div>
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
              <p>Durant mes dernières expériences professionnelles, j'ai essentiellement travaillé sur des solutions SAAS. Pour la plupart des missions qui m’ont été confiées, 
                il s’agissait de me focaliser sur une refonte partielle ou totale d’un ou plusieurs parcours utilisateurs.</p>
              <p>En tenant compte des bonnes pratiques, des frictions et des besoins clients, l’objectif était de proposer des interfaces simples et intuitives. Pour cela, j’ai mis 
                en place plusieurs plans d’action afin de mener à bien l’ensemble de mes projets. Aller à la rencontre des utilisateurs au travers d’entretiens, de guérillas tests dans 
                le but de mieux comprendre leurs besoins. Mais aussi la création des prototypages interactifs et fonctionnels pour rendre l’expérience utilisateur plus immersive.</p>
              <p className='custom'>La <span>conception</span> passe par la compréhension de nos utilisateurs.</p>
              <p>Afin de faciliter le travail entre les collaborateurs, j’ai pris en charge la création des kits UI. Ces librairies nous ont permis de mieux s’organiser entre 
                nous. Grâce à une  architecture visuelle complète et détaillée, il était plus facile de suivre en temps réel l’évolution du produit et de ses composants.</p>
              <p>Je vise toujours à faciliter le travail avec les développeurs. En créant des kit UI complets, je simplifie nos échanges pour éviter des erreurs de compréhension.</p>
              <p>J’ai pris en charge la création des kits UI. Ces librairies nous ont permis de mieux s’organiser entre nous. Grâce à une  architecture visuelle complète et détaillée, 
                il était plus facile de suivre en temps réel l’évolution du produit et de ses composants.</p>
              <p className='custom'>Le <span>design</span> c’est un travail collaboratif.</p>
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