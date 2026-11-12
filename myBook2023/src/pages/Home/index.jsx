import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Card} from '../../components/Card'
import {Footer} from '../../components/Footer'
import './index.scss'
import './practice.scss'
import './pixel.scss'

const practiceTopics = [
    {
        id: 'practice-ai',
        title: 'Explorer et prototyper avec l’IA',
        introduction: 'Avec mes clients, je pars d’un besoin à clarifier. Je transforme les enseignements de la recherche en décisions produit et design, puis je les confronte à l’usage par le prototypage et les tests.',
        skills: [
            {
                title: 'Recherche et exploration',
                description: 'Pour un parcours ou une fonctionnalité, je croise les enseignements d’études scientifiques avec un benchmark concurrentiel. Je documente les options et leurs compromis pour définir avec le client les orientations produit et design à approfondir.',
                icon: 'search',
            },
            {
                title: 'Études de design',
                description: 'Avec ChatGPT, je prépare des études de design qui synthétisent la recherche, précisent les objectifs et donnent forme aux premières pistes. Je compare plusieurs scénarios et j’affine le parcours jusqu’à obtenir une version prête à prototyper.',
                icon: 'folder',
            },
            {
                title: 'Prototypage interactif',
                description: 'Je transmets le parcours, les objectifs et les décisions de design à Claude Code ou à Codex. J’en fais un prototype interactif qui permet aux utilisateurs d’accomplir les tâches clés dans des conditions proches de l’usage réel.',
                icon: 'screen',
            },
            {
                title: 'Tests et itérations',
                description: 'Je mène des entretiens et des tests utilisateurs pour repérer les points de friction et comprendre leurs causes. Avec le client, je priorise les ajustements, puis je les reteste jusqu’à ce que le parcours réponde aux besoins des utilisateurs et aux objectifs du projet.',
                icon: 'feedback',
            },
        ],
    },
    {
        id: 'practice-system',
        title: 'Structurer le contexte de design',
        conclusion: 'Je maintiens un design system Figma réutilisable dont les règles guident l’IA vers des prototypes fidèles au produit.',
        skills: [
            {
                title: 'Concevoir et maintenir le design system',
                description: 'Je conçois et maintiens le design system dans Figma, de ses fondations à sa documentation. Je structure les pages de la bibliothèque, définis les design tokens et crée les composants, leurs variantes et leurs états. L’équipe design fait évoluer cette bibliothèque pour garder des règles cohérentes et des composants réutilisables d’un parcours à l’autre.',
                icon: 'disk',
            },
            {
                title: 'Du prototype à la livraison',
                description: 'Côté design, je travaille en trois étapes. Je maintiens la bibliothèque dans Figma, j’intègre ses évolutions à un prototype interactif dans Claude Code, puis je valide les parcours et prépare les spécifications pour la livraison. Côté développement, le cycle se joue en deux temps. L’équipe part du prototype validé, accompagné de ses spécifications, puis l’implémente dans le produit. Elle dispose ainsi d’une référence pour les interactions et les états à développer, tandis que l’équipe design reste responsable de la bibliothèque Figma.',
                icon: 'flow',
            },
        ],
    },
]

export function Home({mediaQuery816}) {

    const [cards2,] = useState([
        {
            beforeImg: "/card01.png",
            hoverImg: "/card01h.png",
            link: "lichess"
        },
        {
            beforeImg: "/card02.png",
            hoverImg: "/card02h.png",
            link: "freepry1"
        },
    ])

    return (
        <div className='home__container'>
            <div className='section-1' lang='fr'>
                <div className='hero-layout'>
                    <div className='hero'>
                        <p className='hero-role'>DESIGNER UX/UI</p>
                        <h1 className='hero-headline'>
                            <span className='headline-line headline-line--opening'>Je transforme les</span>{' '}
                            <span className='headline-line headline-line--concept'>idées <span className='headline-connector'>en</span></span>{' '}
                            <span className='headline-line'>expériences</span>{' '}
                            <span className='headline-line headline-line--closing'>
                                <span className='headline-highlight'>interactives,</span>
                            </span>{' '}
                            <span className='headline-line headline-line--detail'>avec l’IA comme accélérateur.</span>
                        </h1>
                        <p className='hero-description'>
                            Usages observés.<br/>
                            Interfaces testées.
                        </p>
                    </div>

                    <div className='hero-art'>
                        <img className='hero-portrait' src='/picture.png' width='529' height='554' alt=''/>
                        <span className='hero-spark hero-spark--top'/>
                        <span className='hero-spark hero-spark--left'/>
                        <span className='hero-spark hero-spark--right'/>
                        <span className='hero-heart'/>
                        <span className='hero-badge'>2026-2027</span>
                    </div>

                    <Link className='hero-cta' to='/projets'>
                        Voir mes projets
                        <span className='hero-arrow' aria-hidden='true'/>
                    </Link>
                </div>
            </div>
            <section id='demarche' className='section-2 practice' aria-labelledby='practice-title' lang='fr'>
                <div className='practice-layout'>
                    <header className='practice-intro'>
                        <div className='practice-decoration' aria-hidden='true'>
                            <span className='practice-monitor'><span/></span>
                            <span className='practice-cursor'/>
                            <span className='practice-spark'/>
                        </div>
                        <h2 id='practice-title'>J’apporte mon <span>pixel</span> à l’édifice</h2>
                    </header>

                    {practiceTopics.map(({id, title, introduction, skills, conclusion}) => (
                        <section key={id} className='practice-topic' aria-labelledby={id}>
                            <header className='practice-topic__heading'>
                                <h3 id={id}>{title}</h3>
                                {introduction && <p>{introduction}</p>}
                            </header>

                            <div className='practice-windows'>
                                {skills.map(({title, description, icon}) => (
                                    <article key={title} className={'practice-window practice-window--' + icon}>
                                        <div className='practice-window__tile' aria-hidden='true'>
                                            <span className={'practice-glyph practice-glyph--' + icon}/>
                                        </div>
                                        <div className='practice-window__body'>
                                            <h4>{title}</h4>
                                            <p>{description}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                            {conclusion && <p className='practice-topic__conclusion'>{conclusion}</p>}
                        </section>
                    ))}
                </div>
            </section>

            <div className='section-3'>
                <div className={`row${mediaQuery816 ? '' : ' mobile'}`}
                     style={{
                         display: "flex",
                         flexDirection: "row",
                         justifyContent: "center",
                         flexWrap: "wrap",
                         margin: "0 auto",
                     }}>
                    {
                        cards2.map(({beforeImg, hoverImg, link}, index) => <Card key={index} beforeImg={beforeImg} hoverImg={hoverImg} link={link}/>)
                    }
                </div>
            </div>
            <Footer mediaQuery816={mediaQuery816}/>
        </div>
    )
}