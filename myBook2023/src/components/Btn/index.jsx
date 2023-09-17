import React from 'react';
import { Link } from "react-router-dom"
import './styles.scss';

export const Btn = ({text, link}) => {
    return (
        <Link to={link ? link : '#'} className='wrapper'>
            <div  className='btn'>{text}</div>
            <div className='fix'></div>
        </Link>
    )
}