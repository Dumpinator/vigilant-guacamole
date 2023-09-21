import React, { useState } from 'react';
import { ImLinkedin, ImProfile, ImLab } from 'react-icons/im'
import { MdSavedSearch, MdBorderColor, MdDesignServices  } from 'react-icons/md'
import { Tag } from '../../components/Tag';
import './styles.scss';


export const Card = ({ title, text, icon, tags, color }) => {

    const customIcon = (icon) => {
        switch (icon) {
            case 'search':
                return <MdSavedSearch className='icon-card'/>
            case 'cut':
                return <MdBorderColor className='icon-card'/>
            case 'lib':
                return <MdDesignServices className='icon-card'/>
            default:
               return null;
        }
    }

    return (
        <div className='card'>
            <div className='box__shadow'></div>
            <div className='box__content'>
                <div className='test'>
                    <div className='header' style={{backgroundColor: `${color}`}}>
                        <p className='title'>{ title }</p>
                        { icon ? customIcon(icon) : null }
                    </div>
                    <div className='content'>
                        <p className='text'>{ text }</p>
                        <div className='tags'>
                           {
                            tags?.map(
                                (text, index) => 
                                    <Tag key={text+index+Date.now()} text={text} />
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