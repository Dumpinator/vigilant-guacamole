import React from 'react'
import {useParams} from "react-router-dom"
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {Footer} from '../../components/Footer/index.jsx'
import logoF from '/LogoFreepry.svg'
import logoL from '/LogoLichess.png'

import mockupF1 from '/moke01.jpg'
import mockupF2 from '/moke02.png'
import mockupL from '/moke03.png'

import doc01 from '/doc01.jpg'
import doc02 from '/doc02.jpg'
import doc03 from '/doc03.jpg'
import './index.scss'

export function Project({mediaQuery816}) {
    const {slug} = useParams()

    const handleBack = () => {
        history.go(-1);
    }

    if (slug === 'freepry1') {
        return (
            <>
                <div className={`project__container bg-${slug}`}>
                    <div className="top">
                        <MdKeyboardArrowLeft onClick={handleBack}/>
                    </div>
                    <div className={'container' + `${mediaQuery816 ? '' : ' mobile'} bg-${slug}`}>
                        <div className="header">
                            <div className="logo">
                                <img src={logoF}/>
                            </div>
                            <p className='subtitle'>Comment simplifier le parcours de reprise d’un produit ?</p>
                        </div>
                        <img src={mockupF1}/>
                    </div>
                    <div className="contexte">
                        <div className={`contexte__title color-${slug}`}>Contexte</div>
                        <p className="contexte__text">
                            L’équipe Customer Succes Manager nous a remonté plusieurs problématiques concernant la
                            reprise d’un article par les commerçants. Ce projet vise à comprendre les frictions
                            rencontrées et à proposer un parcours plus adapté. Aussi, j’ai mis en place un KIT UI pour
                            faciliter le déploiement des interfaces par les équipes techniques et un A/B test
                            présenté à des utilisateurs et permettant à ces derniers d’évaluer l’utilisabilité du
                            parcours.
                        </p>
                    </div>
                    <div className="schema">
                        <div className="col">
                            <h2 className={`schema__title title-${slug}`}>Besoins & frictions</h2>
                            <p className="schema__text">Prise de note par l’équipe support des différentes
                                problématiques</p>
                        </div>
                        <div className="col">
                            <h2 className={`schema__title title-${slug}`}>Inspirations & idéations</h2>
                            <p className="schema__text">Recherche et veille graphique via différents canaux</p>
                        </div>
                        <div className="col">
                            <h2 className={`schema__title title-${slug}`}>Prototype V1</h2>
                            <p className="schema__text">Création du kit UI et des premiers parcours</p>
                        </div>
                        <div className="col">
                            <h2 className={`schema__title title-${slug}`}>Tests utilisateurs </h2>
                            <p className="schema__text">Proposition d’un AB Test </p>
                        </div>
                    </div>
                    <img src={doc01}/>
                    <Footer mediaQuery816={mediaQuery816}/>
                </div>
            </>)
    } else if (slug === 'freepry2') {
        return (<>
            <div className={`project__container bg-${slug}`}>
                <div className="top">
                    <MdKeyboardArrowLeft onClick={handleBack}/>
                </div>
                <div className={'container' + `${mediaQuery816 ? '' : ' mobile'} bg-${slug}`}>
                    <div className="header">
                        <div className="logo">
                            <img src={logoF}/>
                        </div>
                        <p className='subtitle'>Création d’un back-office permettant aux boutiques de gérer leur
                            marketplace</p>
                    </div>
                    <img src={mockupF2}/>
                </div>
                <div className="contexte">
                    <div className={`contexte__title color-${slug}`}>Contexte</div>
                    <p className="contexte__text">
                        Suite au déploiement d’une marketplace pour nos clients, nous devions réaliser des interfaces
                        prenant la forme d’un back-office et leur permettant d’interconnecter les
                        deux solutions entre elles. Le but était de visualiser un ensemble d’informations de manière
                        rapide et simple sur les différentes actions effectuées sur la marketplace.
                    </p>
                </div>
                <div className="schema">
                    <div className="col">
                        <h2 className={`schema__title title-${slug}`}>Brainstorming</h2>
                        <p className="schema__text">Liste des fonctionnalités principales à mettre en place</p>
                    </div>
                    <div className="col">
                        <h2 className={`schema__title title-${slug}`}>Inspirations & idéations</h2>
                        <p className="schema__text">Recherche et veille graphique via différents canaux</p>
                    </div>
                    <div className="col">
                        <h2 className={`schema__title title-${slug}`}>Prototype V1</h2>
                        <p className="schema__text">Animation des interfaces et un prototype fonctionnel</p>
                    </div>
                    <div className="col">
                        <h2 className={`schema__title title-${slug}`}>Itérations</h2>
                        <p className="schema__text">Améliorer la V1 en apportant des solutions aux frictions </p>
                    </div>
                </div>
                <img src={doc02}/>
                <Footer mediaQuery816={mediaQuery816}/>
            </div>
        </>)
    } else if (slug === 'lichess') {
        return (<>
            <div className={`project__container bg-${slug}`}>
                <div className="top">
                    <MdKeyboardArrowLeft onClick={handleBack}/>
                </div>
                <div className={'container' + `${mediaQuery816 ? '' : ' mobile'} bg-${slug}`}>
                    <div className="header">
                        <div className="logo">
                            <img src={logoL}/>
                        </div>
                        <p className='subtitle'>How to improve the user experience on lichess.org for beginner level
                            players?</p>
                    </div>
                    <img src={mockupL}/>
                </div>
                <div className="contexte">
                    <div className={`contexte__title color-${slug}`}>Contexte</div>
                    <p className="contexte__text">
                        Lichess.org called on us to improve the user experience on the platform. Our research has led us
                        to propose a more intuitive user journey for a more specific
                        target : beginners.
                    </p>
                </div>
                <div className="schema">
                    <div className="col">
                        <h2 className={`schema__title title-${slug}`}>Research</h2>
                        <p className="schema__text">Heuristic analysis, interviews, users tests, insights priorisation,
                            value proposition</p>
                    </div>
                    <div className="col">
                        <h2 className={`schema__title title-${slug}`}>Ideate</h2>
                        <p className="schema__text">Experience map , personas, user flow</p>
                    </div>
                    <div className="col">
                        <h2 className={`schema__title title-${slug}`}>Design</h2>
                        <p className="schema__text">Wireframes, interface, prototyping</p>
                    </div>
                    <div className="col">
                        <h2 className={`schema__title title-${slug}`}>Assessment</h2>
                        <p className="schema__text">Users tests of iterative solutions</p>
                    </div>
                </div>

                <img src={doc03}/>
                <Footer mediaQuery816={mediaQuery816}/>
            </div>
        </>)
    }
}

