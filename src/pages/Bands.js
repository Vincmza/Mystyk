import React from 'react';
import { bands } from '../data/bands';
import { NavLink} from "react-router-dom";

const Bands = () => {

    return (
        <div className='bands'>
            <ul className='bands__wrapper'>
                {bands.map((item, index)=>(
                    <li key={item.id} className='bands__wrapper__oneBand' style={{animationDelay: `${index*400}ms`}}>
                        <div className='bandsHeader'>
                            <div className='bandsName'>{item.name}</div>
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