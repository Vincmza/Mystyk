import React from 'react';
import { bands } from '../data/bands';

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
                        <div className='bandsImgPosition'>
                            <div className='bandsImgContainer'>
                                <img className='bandsImg' src={item.bandPicture} alt={`logo du groupe ${item.name}`}/>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Bands;