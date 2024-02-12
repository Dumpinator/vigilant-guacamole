import React from 'react'
import './styles.scss'

export const Footer = ({mediaQuery816}) => {
    return (
        <div className='footer'>
            <div className='left' style={ !mediaQuery816 ? {maxWidth:"100%"} : null}>
                <h2 className='title'>ÉCHANGEONS ENSEMBLE</h2>
                <p className='details'>Mon portfolio met en lumière mes créations, mes challenges et les compétences que j’ai pu développées en design d’interfaces.</p>
            </div>
            <div className='right' style={ !mediaQuery816 ? {width:"100%"} : null}>
                <div className='email'>gaspardelphine01@gmail.com</div>
                <div className='social'>
                    <a href="/cv.pdf" target='_blank' rel='noopener noreferrer' className='wrapper'> 
                        <div  className='btnFooter'>CV</div>
                    </a>
                    <a href=" https://www.linkedin.com/in/delphine-gaspar/" target='_blank' rel='noopener noreferrer' className='wrapper'> 
                        <div  className='btnFooter'>LINKEDIN</div>
                    </a>
                </div>
            </div>
        </div>
    )
}