import React from 'react';
import { bands } from '../data/bands';
import { NavLink} from "react-router-dom";


const Bands = () => {
    //SORT ALL BANDS WITH THEIR NAME
    const strSort = (array)=> {
        return array.sort((x,y) => {
          return x.name.toString().localeCompare(y.name.toString());
        });
    }
    return (
        <div className='bands'>
            <h1 className='bandsIntro'>Mystyk's artists</h1>
            <ul className='bands__wrapper'>
                {strSort(bands).map((item, index)=>(
                    <li key={item.id} className='bandsCard' style={{animationDelay: `${index*250}ms`}}>
                        <div className='bandsCard__header'>
                            <NavLink to={`/band/${item.id}`}>
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
        </div>
    );
};

export default Bands;