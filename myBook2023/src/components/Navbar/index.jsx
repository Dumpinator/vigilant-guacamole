import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Icons } from '../Icon';
import { FaHamburger } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import './styles.scss';


export const section = [
    { section: 'Projets'},
    { section: 'A Propos' },
]

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const nodeRef = useRef(null)

    const menu = section.map(({ section }) => 
        <li key={`${section}`} className={`menu m-${section.replaceAll(' ', '-').toLocaleLowerCase()}`}>
            <NavLink to={`${section.toLocaleLowerCase()}`}>{section}</NavLink>
        </li> );

    return (
        <nav>
            <label htmlFor="menu-mobile" className="menu-mobile" onClick={() => setIsOpen(!isOpen)}>
                <h1>Delphine Gaspar</h1>
                <FaHamburger className={ isOpen ? 'is-open' : 'is-close' }/>
            </label>
            <input type="checkbox" id="menu-mobile" role="button" />

            <CSSTransition
                in={isOpen}
                timeout={500}
                classNames="fade"
                appear={true}
                nodeRef={nodeRef}
            >
                <div className={`list`}>
                    {
                        !isOpen &&
                        <Link to="/" className="logo-icon">
                            <div className="logo">
                                <img src={logo} className='picture-author' alt="logo GD" />
                            </div>
                        </Link>
                    }
                    <ul>
                        { menu }
                        <li>
                            <Icons icon="Linkedin" />
                        </li>
                        <li
                            className={`menu m-V`}>
                            <NavLink to={`/contact`}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </CSSTransition>
        </nav>
    )
}