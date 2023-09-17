import React, { useState } from 'react';
import { ImLinkedin, ImProfile, ImLab } from 'react-icons/im'
import { Link } from 'react-router-dom';
import './styles.scss';


export const Icons = ({ icon }) => {

    const [hover, setHover] = useState(false);
    const [hovered, setHovered] = useState(false);


    const fadeOutUp = {
        opacity: `0`,
        transform: `translateY(-20px)`,
        transition: `all 0.2s ease-in-out`,
        display: `hidden`,
    };
    const fadeOutDown = {
        transform: `translateY(20px) scale(1)`,
        opacity: `0`,
        transition: `all 0.2s ease-in-out`,
    };

    const fadeInUp = {
        opacity: `1`,
        transform: `translateY(-12px) scale(1.2)`,
        transition: `all 0.2s ease-in-out`,
    };

    const fadeInDown = {
        opacity: `1`,
        transition: `all .2s ease-in-out`,
    };

    const functest = () => {
        setHover(false);
        setHovered(true);
    }

    switch (icon) {
        case 'Linkedin':
            return (
                <Link to='/lelab' className='icons'
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => functest()}
                >
                    <ImLab className='icon1' style={ hover ? fadeOutUp : hovered ? fadeInDown : null } />
                    <ImLab className='icon2' style={ hover ? fadeInUp : hovered ? fadeOutDown : null } />
                </Link>
            );

        case 'Profil':
            return (
                <Link to={'./CV.pdf'} target={'_blank'} rel='noopener noreferrer' className='icons'
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => functest()}
                >
                    <ImProfile className='icon1' style={hover ? fadeOutUp : hovered ? fadeInDown : null} />
                    <ImProfile className='icon2' style={hover ? fadeInUp : hovered ? fadeOutDown : null} />
                </Link>
            );
        default:
            break;
    }
}