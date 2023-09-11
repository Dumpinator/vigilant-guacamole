import React, { useState } from 'react';
import { ImLinkedin, ImProfile, ImLab } from 'react-icons/im'
import { Tag } from '../../components/Tag';
import { Link } from 'react-router-dom';
import './styles.scss';


export const Card = ({ title, text, icon, tags, color }) => {

    return (
        <div className='card'>
            <div className='box__shadow'></div>
            <div className='box__content'>
                <div className='test'>
                    <div className='header' style={{backgroundColor: `${color}`}}>
                        <p className='title'>{ title }</p>
                        <ImProfile className='icon-card'/>
                    </div>
                    <div className='content'>
                        <p className='text'>{ text }</p>
                        <div className='tags'>
                           {
                            tags?.map((text, index) => 
                                <Tag text={text} />
                            )
                           }
                        </div>
                    </div>
                </div>
                <div className='toto'>
                    <div className='to'></div>
                </div>
                <div className='tutu'>
                    <div className='tu'></div>
                </div>
            </div>
        </div>
    )
}