import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

//COMPONENTS
import Album from '../components/Album';
import Merch from '../components/Merch';
import BandHeader from '../components/Band/BandHeader';
import BandBio from '../components/Band/BandBio';
import BandFollow from '../components/Band/BandFollow';
import BandLineUp from '../components/Band/BandLineUp';
import BandPastMembers from '../components/Band/BandPastMembers';
import ScrollUpButton from '../components/ScrollUpButton';

const Band = ({bands}) => {
    //GOT ID OF THE BAND IN URL
    let {bandId}=useParams()
    //TRANSFORMED IN A NUMBER TYPE
    let id = Number(bandId)
    //GOT ALL BAND'S DATA IN A SINGLE OBJECT
    const bandFiltered = bands.filter(elem=> elem.id === id)[0]
    //SAME BUT IN A SINGLE ARRAY WITH ONE OBJECT INSIDE
    const currentBand = bands.filter(elem=> elem.id === id)
    
    return (
        <div className='band'>
            <div className='back'>
                <NavLink to={"/bands/"}>
                    <input 
                    className='back__toBands' 
                    type="button" 
                    value={"Back to bands"}
                    />
                </NavLink>
            </div>
            <div className='band__wrapper'>
                <BandHeader bandFiltered={bandFiltered}/>
                <BandBio bandFiltered={bandFiltered}/>
                <BandFollow bandFiltered={bandFiltered}/>
                <BandLineUp bandFiltered={bandFiltered}/>
                <BandPastMembers bandFiltered={bandFiltered}/>               
                <div className='releases'>
                    <h3 className='releases__title'>Releases</h3>
                    <div className='releases__wrapper'>
                        {currentBand.map(elem=>(
                            elem.releases.map((item,index)=>(
                                <Album 
                                key={item.id}
                                elem={elem}
                                item={item}
                                index={index}
                                />
                            ))
                        ))}
                    </div>
                </div>
                <div className='merch'>
                    <h3 className='merch__title'>{bandFiltered.merch.length > 0 && <span>Merch</span>}</h3>
                    <div className='merch__wrapper'>
                        {currentBand.map(elem=>(
                            elem.merch.map((item,index)=>(
                                <Merch
                                key={item.id}
                                item={item}
                                elem={elem}
                                index={index} 
                                />
                            ))
                        ))}
                    </div>
                </div>
                <div
                className="button-container"
                >
                    <ScrollUpButton/>
                </div>
            </div>
        </div>
    );
};

export default Band;