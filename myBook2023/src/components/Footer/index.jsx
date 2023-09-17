import React from 'react';
import { Link } from "react-router-dom"
import { Btn } from '../../components/Btn'
import './styles.scss';

export const Footer = ({mediaQuery816}) => {
    !mediaQuery816 ? (console.log("ici",mediaQuery816)) : console.log('rien');
    return (
        <div className='footer'>
            <div className='left' style={ !mediaQuery816 ? {maxWidth:"100%"} : null}>
                <h2 className='title'>ÉCHANGEONS ENSEMBLE</h2>
                <p className='details'>Mon portfolio met en lumière mes créations,mes challenges et les compétences que j’ai pu développées en design d’interface.</p>
            </div>
            <div className='right' style={ !mediaQuery816 ? {width:"100%"} : null}>
                <div className='email'>gaspardelphine01@gmail.com</div>
                <div className='social'>
                    <Btn text={"CV"}/>
                    <Btn text={"LINKEDIN"}/>
                </div>
            </div>
        </div>
    )
}