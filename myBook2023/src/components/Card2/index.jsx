import { MdSavedSearch, MdBorderColor, MdDesignServices, MdStar } from 'react-icons/md'
import { Tag } from '../Tag/index.jsx';
import './styles.scss';


// eslint-disable-next-line react/prop-types
export const Card2 = ({ title, text, icon, tags, color, children }) => {

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
        <div className='card2'>
            <div className='card__header'>
                <div className='card__header__title'>
                    {title}
                </div>
                <div className='card__header__icon' style={{color: color}}>
                    {customIcon(icon)}
                </div>
            </div>
            <div className='card__body'>
                <div className='card__body__text'>
                    {text}
                </div>

            </div>
            <div className='card__footer'>

                {/* eslint-disable-next-line react/prop-types */}
                    {tags?.map((tag, index) => <Tag key={index} text={tag}/>)}

                {children}
            </div>
        </div>
    )
}