import React, {useRef} from 'react';
import { NavLink} from "react-router-dom";
//COMPONENT
import ScrollUpButton from '../components/ScrollUpButton';


const Bands = ({bands}) => {
    const backFromBand = useRef(null)
    return (
        <div className='bands'>
            <h1 className='bandsIntro'>Mystyk's artists</h1>
            <ul className='bands__wrapper'>
                {bands.map((item, index)=>(
                    <li
                    useRef={item.id} 
                    key={item.id} 
                    className='bandsCard' 
                    style={{animationDelay: `${index*200}ms`}}
                    >
                        <div className='bandsCard__header'>
                            <NavLink 
                            to={`/band/${item.id}`}
                            onClick={()=>window.scrollTo({top:0, left:0, behavior: 'smooth'})}
                            >
                                <div className='bandsCard__header__bandsName'>
                                    {item.name}
                                </div>
                            </NavLink>
                            <div className='bandsCard__header__bandsContent'>
                                <span className='bandsCard__header__bandsContent--country'>{item.country}</span>
                                <span className='bandsCard__header__bandsContent--style'>{item.style}</span>
                            </div>
                        </div>
                        <div className='bandsLogo'>
                            <div className='bandsLogo__container'>
                                <NavLink 
                                to={`/band/${item.id}`}
                                onClick={()=>window.scrollTo({top:0, left:0, behavior: 'smooth'})}
                                >
                                    <picture>
                                        <source media="(max-width: 500px)" srcSet={item.bandLogo.logoLow}/>                               
                                            <img 
                                            className='bandsLogo__container--file' 
                                            src={item.bandLogo.logo} 
                                            alt={`logo du groupe ${item.name}`}
                                            />
                                    </picture>
                                </NavLink>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div
            className="button-container"
            >
                <ScrollUpButton/>
            </div>
        </div>
    );
};

export default Bands;