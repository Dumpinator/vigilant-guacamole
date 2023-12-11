import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Footer } from '../../components/Footer/index.jsx'
import logoF from '/LogoFreepry.svg'
import logoL from '/LogoLichess.png'
import logoS from '/LogoSocoon.png'
import mockupF1 from '/moke01.jpg'
import mockupF2 from '/moke02.png'
import mockupL from '/moke03.png'
import mockupS from '/moke04.png'
import doc03 from '/doc03.jpg'
import './index.scss'

export function Project({ mediaQuery816 }) {
  const { slug } = useParams() 

  const handleBack = () => {
    history.go(-1);
  }

  if(slug === 'freepry1') {
    return (<>
      <div className='project__container'>
        <div className="top">
          <MdKeyboardArrowLeft onClick={handleBack}/>
        </div>
        <div className={'container'+`${ mediaQuery816 ? '' : ' mobile'} bg-${slug}`}>
          <div className="header">
            <div className="logo">
              <img src={logoF}/>
            </div>
            <p className='subtitle'>Comment simplifier le parcours de reprise d’un produit ?</p>
          </div>
          <img src={mockupF1}/>
        </div>
        <div className="contexte">
          <div className="contexte__title">Contexte</div>
          <p className="contexte__text">
            L’équipe Customer Succes Manager nous a remonté plusieurs problématiques concernant la reprise d’un article par les commerçants. Ce projet vise à comprendre les frictions
            rencontrées et à proposer un parcours plus adapté. Aussi, j’ai mis en place un KIT UI pour faciliter le déploiement des interfaces par les équipes techniques et un A/B test
            présenté à des utilisateurs et permettant à ces derniers d’évaluer l’utilisabilité du parcours.
          </p>
        </div>
        <div className="schema">
          <div className="col">
            <h2 className="schema__title">Besoins & frictions</h2>
            <p className="schema__text">Prise de note par l’équipe support des différentes problématiques</p>
          </div>
          <div className="col">
            <h2 className="schema__title">Inspirations & idéations</h2>
            <p className="schema__text">Recherche et veille graphique via différents canaux</p>
          </div>
          <div className="col">
            <h2 className="schema__title">Prototype V1</h2>
            <p className="schema__text">Création du kit UI et des premiers parcours</p>
          </div>
          <div className="col">
            <h2 className="schema__title">Tests utilisateurs </h2>
            <p className="schema__text">Proposition d’un AB Test </p>
          </div>
        </div>
        <Footer mediaQuery816={mediaQuery816} />
      </div>
    </>)
  } else if(slug === 'freepry2') {
    return (<>
      <div className='project__container'>
        <div className="top">
          <MdKeyboardArrowLeft onClick={handleBack}/>
        </div>
        <div className={'container'+`${ mediaQuery816 ? '' : ' mobile'} bg-${slug}`}>
          <div className="header">
            <div className="logo">
              <img src={logoF}/>
            </div>
            <p className='subtitle'>Création d’un back-office permettant aux boutiques de gérer leur marketplace</p>
          </div>
          <img src={mockupF2}/>
        </div>
        <div className="contexte">
          <div className="contexte__title">Contexte</div>
          <p className="contexte__text">
            Suite au déploiement d’une marketplace pour nos clients, nous devions réaliser des interfaces prenant la forme d’un back-office et leur permettant d’interconnecter les 
            deux solutions entre elles. Le but était de visualiser un ensemble d’informations de manière rapide et simple sur les différentes actions effectuées sur la marketplace. 
          </p>
        </div>
        <div className="schema">
          <div className="col">
            <h2 className="schema__title">Brainstorming</h2>
            <p className="schema__text">Liste des fonctionnalités principales à mettre en place</p>
          </div>
          <div className="col">
            <h2 className="schema__title">Inspirations & idéations</h2>
            <p className="schema__text">Recherche et veille graphique via différents canaux</p>
          </div>
          <div className="col">
            <h2 className="schema__title">Prototype V1</h2>
            <p className="schema__text">Animation des interfaces et un prototype fonctionnel</p>
          </div>
          <div className="col">
            <h2 className="schema__title">Itérations</h2>
            <p className="schema__text">Améliorer la V1 en apportant des solutions aux frictions </p>
          </div>
        </div>
        <Footer mediaQuery816={mediaQuery816} />
      </div>
    </>)
  } else if(slug === 'lichess') {
    return (<>
      <div className='project__container'>
        <div className="top">
          <MdKeyboardArrowLeft onClick={handleBack}/>
        </div>
        <div className={'container'+`${ mediaQuery816 ? '' : ' mobile'} bg-${slug}`}>
          <div className="header">
            <div className="logo">
              <img src={logoL}/>
            </div>
            <p className='subtitle'>How to improve the user experience on lichess.org for beginner level players?</p>
          </div>
          <img src={mockupL}/>
        </div>
        <div className="contexte">
          <div className="contexte__title">Contexte</div>
          <p className="contexte__text">
            Lichess.org called on us to improve the user experience on the platform. Our research has led us to propose a more intuitive user journey for a more specific 
            target : beginners.
          </p>
        </div>
        <div className="schema">
          <div className="col">
            <h2 className="schema__title">Research</h2>
            <p className="schema__text">Heuristic analysis, interviews, users tests, insights priorisation, value proposition</p>
          </div>
          <div className="col">
            <h2 className="schema__title">Ideate</h2>
            <p className="schema__text">Experience map , personas, user flow</p>
          </div>
          <div className="col">
            <h2 className="schema__title">Design</h2>
            <p className="schema__text">Wireframes, interface, prototyping</p>
          </div>
          <div className="col">
            <h2 className="schema__title">Assessment</h2>
            <p className="schema__text">Users tests of iterative solutions</p>
          </div>
        </div>
        
        <img src={doc03}/>
        <Footer mediaQuery816={mediaQuery816} />
      </div>
    </>)
  } else if(slug === 'socoon') {
    return (<>
      <div className='project__container'>
        <div className="top">
          <MdKeyboardArrowLeft onClick={handleBack}/>
          <p>Retour aux projets</p>
        </div>
        <div className={'container'+`${ mediaQuery816 ? '' : ' mobile'} bg-${slug}`}>
          <div className="header">
            <div className="logo">
              <img src={logoS}/>
            </div>
            <p className='subtitle'>Comment rendre un parcours d’inscription intuitif et incitatif ?</p>
          </div>
          <img src={mockupS}/>
        </div>
        <div className="contexte">
          <div className="contexte__title">Contexte</div>
          <p className="contexte__text">
            J’ai pris en charge la refonte UX du parcours d’inscription sur l’app mobile. L’objectif étant de rendre l’inscription plus simple et intuitive et créer un visuel 
            plus attractif et tendance. Aussi, j’ai participé  à la déclinaison de l’app mobile vers la web app pour une utilisation multi-device.
          </p>
        </div>
        <div className="schema">
          <div className="col">
            <h2 className="schema__title">Besoins & frictions</h2>
            <p className="schema__text">Audit ergonomique d la V.1</p>
          </div>
          <div className="col">
            <h2 className="schema__title">Inspirations & idéations</h2>
            <p className="schema__text">Veille graphique sur Behance, Dribble</p>
          </div>
          <div className="col">
            <h2 className="schema__title">Conception</h2>
            <p className="schema__text">Userflows, wireframes, prototyping de la V.2 et rédaction des hypothèses.</p>
          </div>
          <div className="col">
            <h2 className="schema__title">Tests utilisateurs</h2>
            <p className="schema__text">Guérillas tests du parcours d’inscription en vue de tester nos hypothèses.</p>
          </div>
        </div>
       
        <Footer mediaQuery816={mediaQuery816} />
      </div>
    </>)
  }
}

