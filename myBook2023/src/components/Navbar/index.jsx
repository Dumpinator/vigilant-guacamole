import {useState, useRef} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import {Icons} from '../Icon';
import {FaHamburger} from 'react-icons/fa';
import './styles.scss';


export const section = [
    {section: 'Projets'},
    {section: 'À propos'}
]


export const Navbar = ({mediaQuery816}) => {
    console.log(mediaQuery816, 'mediaQuery816')
    const [isOpen, setIsOpen] = useState(false)
    const nodeRef = useRef(null)
    const logo = <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="26" cy="26" r="26" fill="#F2F79E"/>
        <path
            d="M14.5923 36.6214V14.9284H20.5578C22.1191 14.9284 23.2941 15.3639 24.0829 16.2349C24.8718 17.0977 25.2662 18.3631 25.2662 20.0312V30.1874C25.2662 32.2417 24.9046 33.8276 24.1815 34.9451C23.4666 36.0626 22.2094 36.6214 20.4099 36.6214H14.5923ZM18.9555 32.7881H19.7074C20.5044 32.7881 20.9029 32.4019 20.9029 31.6295V20.4379C20.9029 19.7148 20.8043 19.2506 20.6071 19.0451C20.4181 18.8315 20.0278 18.7247 19.4362 18.7247H18.9555V32.7881ZM31.5152 36.8186C28.4174 36.8186 26.8685 34.6 26.8685 30.1628V20.8077C26.8685 16.7567 28.6434 14.7312 32.1931 14.7312C33.6558 14.7312 34.7774 15.027 35.558 15.6186C36.3386 16.202 36.8768 17.0566 37.1727 18.1824C37.4685 19.3081 37.6164 20.6803 37.6164 22.2991H33.3764V20.3763C33.3764 19.9079 33.3106 19.5176 33.1792 19.2054C33.0559 18.8849 32.793 18.7247 32.3903 18.7247C31.8891 18.7247 31.5563 18.8931 31.392 19.23C31.2358 19.5669 31.1578 19.9367 31.1578 20.3393V30.853C31.1578 31.4364 31.2317 31.913 31.3796 32.2828C31.5358 32.6443 31.8357 32.8251 32.2794 32.8251C32.7396 32.8251 33.0436 32.6443 33.1915 32.2828C33.3476 31.913 33.4257 31.4282 33.4257 30.8284V27.7346H32.2671V23.9877H37.5671V36.6214H35.8292L35.0896 34.7972C34.3337 36.1448 33.1422 36.8186 31.5152 36.8186Z"
            fill="#191117"/>
    </svg>
    const menu = section.map(({section}, index) =>
        <li key={`${section}`} className={`menu m-${section.replaceAll(' ', '-').toLocaleLowerCase()}`}>
            <NavLink to={`${index === 1 ? "about" : section.toLocaleLowerCase()}`}>{section}</NavLink>
        </li>);

    return (
        <nav>
            <label htmlFor="menu-mobile" className="menu-mobile" onClick={() => setIsOpen(!isOpen)}>

                <h1>Delphine Gaspar</h1>
                <FaHamburger className={isOpen ? 'is-open' : 'is-close'}/>
            </label>
            <input type="checkbox" id="menu-mobile" role="button"/>

            <CSSTransition
                in={isOpen}
                timeout={500}
                classNames="fade"
                appear={true}
                nodeRef={nodeRef}
            >
                <div className={`list`}>
                    {
                        !isOpen && mediaQuery816 &&
                        <Link to="/" className="logo-icon">
                            <div className="logo">
                                {logo}
                                <h1>DELPHINE GASPAR</h1>
                            </div>
                        </Link>
                    }
                    <ul>
                        {menu}
                        <li>
                            <Icons icon="Linkedin"/>
                        </li>
                    </ul>
                </div>
            </CSSTransition>
        </nav>
    )
}