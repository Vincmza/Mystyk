import React from 'react';
import { bands } from '../data/bands';
import { NavLink} from "react-router-dom";

const Bands = () => {

    return (
        <div className='bands'>
            <h1 className='bandsIntro'>Mystyk's artists</h1>
            <ul className='bands__wrapper'>
                {bands.map((item, index)=>(
                    <li key={item.id} className='bandsCard' style={{animationDelay: `${index*400}ms`}}>
                        <div className='bandsCard__header'>
                            <NavLink to={`/band/${item.id}`}><div className='bandsCard__header__bandsName'>{item.name}</div></NavLink>
                            <div className='bandsCard__header__bandsContent'>
                                <span className='bandsCard__header__bandsContent--country'>{item.country}</span>
                                <span className='bandsCard__header__bandsContent--style'>{item.style}</span>
                            </div>
                        </div>
                        <div className='bandsLogo'>
                            <div className='bandsLogo__container'>
                                <NavLink to={`/band/${item.id}`}><img className=' bandsLogo__container--file' src={item.bandLogo} alt={`logo du groupe ${item.name}`}/></NavLink>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Bands;