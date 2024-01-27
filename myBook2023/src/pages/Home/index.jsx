import { useState } from 'react'
//import { Card } from '../../components/Card'
import { Card2 } from "../../components/Card2";
import {SimpleSlider} from '../../components/SimpleSlider'
import { Footer } from '../../components/Footer'
import { BsFillChatQuoteFill } from 'react-icons/bs'
import './index.scss'

export function Home({mediaQuery816}) {

  const [cards, ] = useState([
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
              <h1>Je transforme des
                <span> concepts</span> en
                <span> interfaces concrètes </span>
                  et <span> intuitives</span>.
              </h1>
              <div className='brand'>
                <p>
                  J’aime adopter une approche allant de l’analyse à la résolution de problèmes.
                  Je cherche à comprendre le comportement des utilisateurs et apprendre les meilleures pratiques UX.
                </p>
                <BsFillChatQuoteFill />
              </div>
            </div>

            <div className='popup' style={{
              backgroundImage: `url(/bg.jpg)`,
              backgroundPosition: "bottom",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}>

            </div>
          </div>
      </div>
      <div className='section-2'>
        
        <div className={`container${ mediaQuery816 ? '' : ' mobile'}`}>
          <div className='left'>
            {
              cards.map(({ title, text, icon, tags, color }, index) =>
                <div key={index+Date.now()} className={`row${ mediaQuery816 ? '' : ' mobile'}`}>
                  <Card2 title={title} text={text} icon={icon} tags={tags} color={color} />
                </div>
              )
            }
          </div>
          <div className={`right${ mediaQuery816 ? '' : ' mobile'}`}>
          <h2>J’apporte mon <span>pixel</span> à l’édifice</h2>
            <div className='text'>
              <p>Au cours de mes expériences professionnelles récentes, mon travail principal s'est concentré sur des solutions SAAS. La plupart de mes missions impliquaient la
                refonte partielle ou totale de parcours utilisateurs, en tenant compte des bonnes pratiques, des obstacles potentiels et des besoins des clients.</p>

              <p>Pour atteindre cet objectif, j'ai élaboré des plans d'action qui comprenaient des entretiens avec les utilisateurs et des tests rapides <span>pour mieux comprendre
                leurs besoins</span>. J'ai également créé des prototypes interactifs et fonctionnels pour améliorer l'expérience utilisateur. La clé de la conception réside dans
                la compréhension de nos utilisateurs, et mon objectif constant est de <span>simplifier la collaboration</span> avec les développeurs en fournissant des kits UI
                complets.</p>

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