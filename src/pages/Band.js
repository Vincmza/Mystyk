import React, {useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';
//ICONS
import * as net from "../data/icons";
//COMPONENTS
import Album from '../components/Album';
import Merch from '../components/Merch';
import BandHeader from '../components/Band/BandHeader';
import BandBio from '../components/Band/BandBio';
import BandFollow from '../components/Band/BandFollow';
import BandLineUp from '../components/Band/BandLineUp';
import BandPastMembers from '../components/Band/BandPastMembers';


const Band = ({bands}) => {
    //GOT ID OF THE BAND IN URL
    let {bandId}=useParams()
    //TRANSFORMED IN A NUMBER TYPE
    let id = Number(bandId)
    //GOT ALL BAND'S DATA IN A SINGLE OBJECT
    const bandFiltered = bands.filter(elem=> elem.id === id)[0]
    //SAME BUT IN A SINGLE ARRAY WITH ONE OBJECT INSIDE
    const currentBand = bands.filter(elem=> elem.id === id)
    //DISPLAY ITEM DETAILS
    const [description, setDescription]=useState([])
    //SOCIAL NETWORK ICONS DISPLAY
    const socialLinks = ()=>{
        const links = bandFiltered.followLinks[0]
        const linksData = Object.entries(links)
        return linksData.map(socialMediaIcon=>
            socialMediaIcon[1] !== "" &&
            (<li key={socialMediaIcon} className="follow__container__oneIcon">
                <a 
                href={socialMediaIcon[1]} 
                target="_blank" 
                rel="noreferrer" 
                className={`follow__container__oneIcon--${socialMediaIcon[0]}`}>
                    {net[socialMediaIcon[0]]}
                </a>
            </li>))
    }
    //OLD MEMBERS FILTERED IN AN ARRAY
    const oldMembers = bandFiltered.lineUp.filter(elem=>elem.pastMember.isTrue === true)
    //DISPLAY PAST MEMBERS FUNCTION
    const displayPastMembers = ()=>{  
        if(oldMembers.length > 0){
            return (oldMembers.map(elem=>(
                <li key={elem} className='pastMembers__list__oldMember'>
                    <span>{elem.name} : </span>
                    <span>{elem.instrument.length > 1 ? (elem.instrument.join(", ")):(elem.instrument)} - </span>
                    <span>{elem.pastMember.fromTo}.</span>
                </li>
            )))
        }
    }
    return (
        <div className='band'>
            <div className='back'>
                <NavLink to={"/bands"}>
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
                <BandFollow socialLinks={socialLinks}/>
                <BandLineUp bandFiltered={bandFiltered}/>
                <BandPastMembers oldMembers={oldMembers} displayPastMembers={displayPastMembers}/>
                
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
                                description={description} 
                                setDescription={setDescription}
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
                                description={description} 
                                setDescription={setDescription}
                                />
                            ))
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Band;