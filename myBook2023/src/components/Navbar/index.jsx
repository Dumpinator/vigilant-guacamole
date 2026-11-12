import {useEffect, useState} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {Icons} from '../Icon';
import profileAvatar from '../../assets/profile-avatar.png';
import './styles.scss';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className="site-nav" aria-label="Navigation principale" lang="fr">
            <Link to="/" className="site-nav__brand">
                <img className="site-nav__avatar" src={profileAvatar} alt="" width="128" height="128"/>
                <span>Delphine Gaspar</span>
            </Link>
            <button
                type="button"
                className="site-nav__toggle"
                aria-controls="site-nav-links"
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                onClick={() => setIsOpen(open => !open)}
            >
                <span aria-hidden="true"/>
            </button>
            <ul id="site-nav-links" className={isOpen ? 'site-nav__links is-open' : 'site-nav__links'}>
                <li><NavLink to="/projets">Projets</NavLink></li>
                <li><NavLink to="/about">À propos</NavLink></li>
                <li><Icons icon="Linkedin" ariaLabel="Le Lab"/></li>
            </ul>
        </nav>
    );
};
