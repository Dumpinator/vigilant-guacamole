import {useParams} from "react-router-dom"
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {Footer} from '../../components/Footer/index.jsx'
import logoF from '/LogoFreepry.svg'
import logoL from '/LogoLichess.png'

import mockupF1 from '/moke01.jpg'
import mockupF2 from '/moke02.jpg'
import mockupF3 from '/moke03.png'

import doc01 from '/doc01.jpg'
import doc02 from '/doc02.jpg'
import doc03 from '/doc03.jpg'
import './index.scss'

// eslint-disable-next-line react/prop-types
function ProjectContainer({ slug, logo, subtitle, text, schema, doc, mockup, mediaQuery816, handleBack }) {

    console.log('data => ', { slug, logo, subtitle, text, schema, doc, mockup, mediaQuery816, handleBack })

    return (
        <div className={`project__container bg-${slug}`}>
            <div className="top">
                <MdKeyboardArrowLeft onClick={handleBack}/>
            </div>
            <div className={'container' + `${mediaQuery816 ? '' : ' mobile'} bg-${slug}`}>
                <div className="header">
                    <div className="logo">
                        <img src={logo}/>
                    </div>
                    <p className='subtitle'>{subtitle}</p>
                </div>
                <img src={mockup}/>
            </div>
            <div className="contexte">
                <div className={`contexte__title color-${slug}`}>Contexte</div>
                <p className="contexte__text">{text}</p>
            </div>
            <div className="schema">
                {/* eslint-disable-next-line react/prop-types */}
                {schema?.map((item, index) => (
                    <div className="col" key={index}>
                        <h2 className={`schema__title title-${slug}`}>{item.title}</h2>
                        <p className="schema__text">{item.text}</p>
                    </div>
                ))}
            </div>
            <img src={doc} alt={""}/>
            <Footer mediaQuery816={mediaQuery816}/>
        </div>
    );
}

// eslint-disable-next-line react/prop-types
export function Project({mediaQuery816}) {
    const {slug} = useParams()

    const handleBack = () => {
        history.go(-1);
    }

    let projectData = {};

    if (slug === 'freepry1') {
        projectData = {
            slug: slug,
            logo: logoF,
            mockup: mockupF1,
            subtitle: 'Comment simplifier le parcours de reprise d’un produit ?',
            text: 'L’équipe Customer Succes Manager nous a remonté plusieurs problématiques concernant la reprise d’un article par les commerçants. Ce projet vise à comprendre les frictions rencontrées et à proposer un parcours plus adapté. Aussi, j’ai mis en place un KIT UI pour faciliter le déploiement des interfaces par les équipes techniques et un A/B test présenté à des utilisateurs et permettant à ces derniers d’évaluer l’utilisabilité du parcours.',
            schema: [
                {title: 'Besoins & frictions', text: 'Prise de note par l’équipe support des différentes problématiques'},
                {title: 'Inspirations & idéations', text: 'Recherche et veille graphique via différents canaux'},
                {title: 'Prototype V1', text: 'Création du kit UI et des premiers parcours'},
                {title: 'Tests utilisateurs', text: 'Proposition d’un AB Test'}
            ],
            doc: doc01,
            mediaQuery816: mediaQuery816,
            handleBack: handleBack
        };
    } else if (slug === 'freepry2') {
        projectData = {
            slug: slug,
            logo: logoF,
            mockup: mockupF2,
            subtitle: 'Création d’un back-office permettant aux boutiques de gérer leur marketplace',
            text: 'Suite au déploiement d’une marketplace pour nos clients, nous devions réaliser des interfaces prenant la forme d’un back-office et leur permettant d’interconnecter les deux solutions entre elles. Le but était de visualiser un ensemble d’informations de manière rapide et simple sur les différentes actions effectuées sur la marketplace.',
            schema: [
                {title: 'Brainstorming', text: 'Liste des fonctionnalités principales à mettre en place'},
                {title: 'Inspirations & idéations', text: 'Recherche et veille graphique via différents canaux'},
                {title: 'Prototype V1', text: 'Animation des interfaces et un prototype fonctionnel'},
                {title: 'Itérations', text: 'Améliorer la V1 en apportant des solutions aux frictions'}
            ],
            doc: doc02,
            mediaQuery816: mediaQuery816,
            handleBack: handleBack
        };
    } else if (slug === 'lichess') {
        projectData = {
            slug: slug,
            logo: logoL,
            mockup: mockupF3,
            subtitle: 'How to improve the user experience on lichess.org for beginner level players?',
            text: 'Lichess.org called on us to improve the user experience on the platform. Our research has led us to propose a more intuitive user journey for a more specific target : beginners.',
            schema: [
                {title: 'Research', text: 'Heuristic analysis, interviews, users tests, insights priorisation, value proposition'},
                {title: 'Ideate', text: 'Experience map , personas, user flow'},
                {title: 'Design', text: 'Wireframes, interface, prototyping'},
                {title: 'Assessment', text: 'Users tests of iterative solutions'}
            ],
            doc: doc03,
            mediaQuery816: mediaQuery816,
            handleBack: handleBack
        };
    }

    return <ProjectContainer {...projectData} />;
}