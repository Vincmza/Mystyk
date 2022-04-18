import React, {useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';
//DATA
import { bands } from '../data/bands';
//ICONS
import * as net from "../data/icons";
//COMPONENTS
import Album from '../components/Album';
import Merch from '../components/Merch';
import * as kosmos from "../data/bands_files/kosmos_files"


const Band = () => {
    //GOT ID OF THE BAND IN URL
    let {bandId}=useParams()
    //TRANSFORMED IN A NUMBER TYPE
    let id = Number(bandId)
    //GOT ALL BAND'S DATA
    const bandFiltered = bands.filter(elem=> elem.id === id)[0]
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
                <div 
                className='band__header' 
                >
                    <picture>
                        <source media="(max-width: 800px)" srcset={bandFiltered.banner.bannerMedium}/>
                        <source media="(max-width: 500px)" srcset={bandFiltered.banner.bannerLow}/>                               
                            <img 
                            className='band__header__banner' 
                            src={bandFiltered.banner.bannerHigh} 
                            alt={`logo du groupe ${bandFiltered.name}`}
                            />
                    </picture>
                    <h1 className='band__name'>{bandFiltered.name}</h1>
                    <div className='band__style'>
                        <span className='band__style'>Style général : 
                            <span className='band__style--main'>{bandFiltered.style}.</span>
                        </span>
                        <span className='band__style'>Sous-genre : 
                            <span className='band__style--sub'>{bandFiltered.subStyle}.</span>
                        </span>
                    </div>
                </div>
                <div className='bio'>
                    <div className='bio__content'>
                        <h2 className='bio__content bio__content--title'>Biographie</h2>
                        <div className='bio__content bio__content--text'>
                            {bandFiltered.biography}
                        </div>
                    </div>
                </div>
                <div className='follow'>
                    <ul className='follow__links'>
                        <h2 className='follow__title'>Follow</h2>
                        <div className='follow__container'>
                            {socialLinks()}
                        </div>
                    </ul>
                </div>
                <div className='lineUp'>
                    <h3 className='lineUp__title'>Current line up</h3>
                    <ul className='lineUp__list'>
                        {bandFiltered.lineUp.map(elem=>(
                            <li key={elem.name}>
                               {elem.pastMember.isTrue === false ?                               
                               (<>
                                <div className='lineUp__list__card'>
                                    <div className='lineUp__list__card--member'>
                                        {elem.name} :
                                    </div>
                                    <ul className='lineUp__list__card--role'>
                                        {elem.instrument.map((item,index)=>(
                                            index !== elem.instrument.length-1 ?
                                            <li className='role' key={item} style={{paddingLeft:"10px"}}>
                                                {item},
                                            </li> : 
                                            <li className='role' key={item} style={{paddingLeft:"10px"}}>
                                                {item}.
                                            </li>)
                                        )}
                                    </ul>
                                </div>
                               </>) 
                               : 
                               (<>
                               </>)}
                        </li>))}
                    </ul>
                </div>
                <div className='pastMembers'>
                        {oldMembers.length > 0 &&
                            <h3 className='pastMembers__title'>Past members</h3>
                        }
                    <ul className='pastMembers__list'>
                        {displayPastMembers()}
                    </ul>
                </div>              
                <div className='releases'>
                    <h3 className='releases__title'>Releases</h3>
                    <Album elem={bandFiltered} description={description} setDescription={setDescription}/>
                </div>
                <div className='merch'>
                    <h3 className='merch__title'>Merch</h3>
                    <Merch elem={bandFiltered} description={description} setDescription={setDescription}/>
                </div>
            </div>
        </div>
    );
};

export default Band;