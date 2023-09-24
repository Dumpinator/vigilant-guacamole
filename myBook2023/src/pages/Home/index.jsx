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
              <h1>Designer</h1>
              <h1>UX UI</h1>
              <p>Hello, moi c’est Delphine et je vous souhaite la bienvenue !</p>
              <p>Passionnée de design et d'interfaces.</p>
              <p>Je vous laisse découvrir mon univers et mon parcours.</p>
            </div>
            <div className='popup'>
                  <img src='test.png'/>
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
        <h2>J’apporte mon pixel à l’édifice</h2>
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
            <div className='text'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis quo qui 
                ratione iusto ducimus! Ad animi aspernatur aliquid, neque quia molestiae placeat voluptatem quaerat. Enim velit architecto assumenda molestias.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis quo qui 
                ratione iusto ducimus! Ad animi aspernatur aliquid, neque quia molestiae placeat voluptatem quaerat. Enim velit architecto assumenda molestias.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='section-3'>
        <h2>Dernière réalisation</h2>
        <SimpleSlider mediaQuery816={mediaQuery816} />
      </div>
     <Footer mediaQuery816={mediaQuery816} />
    </div>
  )
}