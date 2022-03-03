import { bands } from '../data/bands';
import React from 'react';
import { useParams } from 'react-router-dom';


const Band = () => {
    //GOT ID OF THE BAND IN URL
    let {bandId}=useParams()
    //TRANSFORMED IN A NUMBER TYPE
    let id = Number(bandId)
    //GOT ALL BAND'S DATA
    const bandFiltered = bands.filter(elem=> elem.id === id)[0]
    return (
        <div className='band'>
            <div className='band__wrapper'>
                <h1 className='band__name'>{bandFiltered.name}</h1>
                <div className='band__style'>
                    <span className='band__style band__style--main'>Style général : {bandFiltered.style}</span>
                    <span className='band__style band__style--sub'>Sous-genre : {bandFiltered.subStyle}</span>
                </div>
                <div className='banner'>
                    <div className='banner__Container'>
                        <img className='bannerImg' src={bandFiltered.bandLogo} alt={`logo du groupe ${bandFiltered.name}`}/>
                    </div>
                </div>
                <div className='bio'>
                    <div className='bio__content'>
                        <h2 className='bio__content bio__content--title'>Biographie</h2>
                        <div className='bio__content bio__content--text'>
                            {bandFiltered.biography}
                        </div>
                    </div>
                    <div className='bio__lineup'>
                        <h3 className='bio__lineup bio__lineup--title'>Line up</h3>
                        <ul className='bio__lineup bio__lineup--list'>
                            {bandFiltered.lineUp.map(elem=>(
                            <li key={elem.name}>
                                <div className='member'>
                                    {elem.name}
                                </div>
                                <ul>
                                    {elem.instrument.map((item,index)=>(
                                    <li key={index}>
                                        {item}
                                    </li>))}
                                </ul>
                            </li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Band;