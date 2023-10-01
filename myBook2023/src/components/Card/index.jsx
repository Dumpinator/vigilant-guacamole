import React from 'react';
import { MdSavedSearch, MdBorderColor, MdDesignServices, MdStar } from 'react-icons/md'
import { Tag } from '../../components/Tag';
import './styles.scss';


export const Card = ({ title, text, icon, tags, color, bg, children }) => {

    const customIcon = (icon) => {
        switch (icon) {
            case 'search':
                return <MdSavedSearch className='icon-card'/>
            case 'cut':
                return <MdBorderColor className='icon-card'/>
            case 'lib':
                return <MdDesignServices className='icon-card'/>
            case 'star':
                return <MdStar className='icon-card'/>
            default:
               return null;
        }
    }

    return (
        <div className='card'>
            <div className='box__shadow'></div>
            <div className='box__content'>
                <div className='test' 
                        style={ bg ? { 
                            background: `url(${bg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            overflow: "hidden",
                            borderRadius: "24px",
                        } : null }>
                    {
                        title ? 
                            <div className='header' style={{backgroundColor: `${color}`}}>
                                <p className='title'>{ title }</p>
                                { icon ? customIcon(icon) : null }
                            </div> : null
                    }
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
                        { children ? children : null }
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