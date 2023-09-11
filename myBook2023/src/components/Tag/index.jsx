import React from 'react';
import './styles.scss';

export const Tag = ({text}) => {
    return (
        <div key={Date.now+text} className='tag'>{text}</div>
    )
}