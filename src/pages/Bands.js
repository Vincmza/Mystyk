import React from 'react';
import { bands } from '../data/bands';
import { NavLink} from "react-router-dom";

const Bands = () => {

    return (
        <div className='bands'>
            <h1 className='bandsIntro'>Mystyk's artists</h1>
            <ul className='bands__wrapper'>
                {bands.map((item, index)=>(
                    <li key={item.id} className='bands__wrapper--oneBand' style={{animationDelay: `${index*400}ms`}}>
                        <div className='bandsHeader'>
                            <NavLink to={`/band/${item.id}`}><div className='bandsName'>{item.name}</div></NavLink>
                            <div className='bandsContent'>
                                <span className='bandsCountry'>{item.country}</span>
                                <span className='bandsStyle'>{item.style}</span>
                            </div>
                        </div>
                        <div className='bandsLogoPosition'>
                            <div className='bandsLogoContainer'>
                                <NavLink to={`/band/${item.id}`}><img className='bandsLogo' src={item.bandLogo} alt={`logo du groupe ${item.name}`}/></NavLink>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Bands;