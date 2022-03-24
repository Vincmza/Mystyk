import { bands } from '../data/bands';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import * as net from "../data/icons";


const Band = () => {
    //GOT ID OF THE BAND IN URL
    let {bandId}=useParams()
    //TRANSFORMED IN A NUMBER TYPE
    let id = Number(bandId)
    //GOT ALL BAND'S DATA
    const bandFiltered = bands.filter(elem=> elem.id === id)[0]
    //RELEASES AND MERCH LENGTH TO SET UP INLINE CONDITIONNAL MARGIN RIGHT
    const releasesLength = bandFiltered.releases.length
    const merchLength = bandFiltered.merch.length
    //CONDITIONNAL STYLE IN RELATION TO HOW LONG ARE RELEASES AND MERCH ARRAYS
    const styleReleasesAndMerch = (data)=>{
        const nbr = data === "releases" ? bandFiltered.releases.length : bandFiltered.merch.length
        if(nbr%2===0){
            if(nbr <= 2){
                return {justifyContent : "center"}
            }
            return {justifyContent : "space-between"}
        }else{
            if(nbr <= 2){
                return {justifyContent : "center"}
            }
            return {justifyContent : "space-around"}
        }
    }
    //CONDITIONNAL DISPLAY OF ICONS WHERE EVERY ALBUM CAN BE LISTENED
    const displayIcons = (iconsObject)=>{
        if(iconsObject){
            const data = Object.entries(iconsObject)
            return data.map(item=>(
                item[1] !== "" &&
                <a target="_blank" key={item} className={`releases__list__card__listen--${item[0]}`} href={item[1]}>
                {net[item[0]]}
                </a>
            ))
        }      
    }
    return (
        <div className='band'>
            <div className='back'>
                <NavLink to={"/bands"}>
                    <input className='back__toBands' type="button" value={"Back to bands"}/>
                </NavLink>
            </div>
            <div className='band__wrapper'>
                <div className='band__header' style={{backgroundImage: `url(${bandFiltered.banner})`}}>
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
                <div className='lineUp'>
                    <h3 className='lineUp__title'>Line up</h3>
                    <ul className='lineUp__list'>
                        {bandFiltered.lineUp.map(elem=>(
                        <li key={elem.name}>
                            <div className='lineUp__list__card'>
                                <div className='lineUp__list__card--member'>
                                    {elem.name} :
                                </div>
                                <ul className='lineUp__list__card--role'>
                                    {elem.instrument.map((item,index)=>(
                                        index !== elem.instrument.length-1 ?
                                        <li className='role' key={index} style={{paddingLeft:"10px"}}>
                                            {item},
                                        </li> : 
                                        <li className='role' key={index} style={{paddingLeft:"10px"}}>
                                            {item}.
                                        </li>)
                                    )}
                                </ul>
                            </div>
                        </li>))}
                    </ul>
                </div>
                <div className='releases'>
                    <h3 className='releases__title'>Releases</h3>
                    <ul className='releases__list' style={styleReleasesAndMerch("releases")}>
                        {bandFiltered.releases.map((elem, index)=>(
                            <li className='releases__list__card' key={elem.id} style={{animationDelay : `${index*250}ms`, marginRight : releasesLength <= 2 && "5%"}}>
                                <div className='releases__list__card__imgContainer'>
                                    {elem.listenAndShop()[0] && elem.listenAndShop()[0].seasonShopIcon !== "" ? 
                                        (<>
                                            <a target="_blank" href={elem.listenAndShop()[0].seasonShop}>
                                                <img className='releases__list__card__imgContainer__file' src={elem.frontCover} alt={`Pochette de l'album ${elem.title}`}/>
                                            </a>
                                        </>)
                                        :
                                        (<>
                                            <img className='releases__list__card__imgContainer__file' src={elem.frontCover} alt={`Pochette de l'album ${elem.title}`}/>
                                        </>)
                                    }
                                </div>
                                <div className='releases__list__card__infos'>
                                    <div className='releases__list__card__infos--title'>{elem.title}</div>
                                    <div className='releases__list__card__infos--date'>Release date : {elem.releaseDate}</div>
                                    <div className='releases__list__card__infos--format'>Format : {elem.format}</div>
                                    <div className='releases__list__card__infos--duration'>Length : {elem.duration}</div>
                                </div>
                                <div className='releases__list__card__listen'>
                                    {displayIcons(elem.listenAndShop()[0])}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='merch'>
                    <h3 className='merch__title'>Merch</h3>
                    <ul className='merch__list' style={styleReleasesAndMerch("merch")}>
                        {bandFiltered.merch.map((elem,index)=>(
                            <li key={elem.id} className="merch__list__card" style={{animationDelay : `${index*250}ms`, marginRight : merchLength <= 2 && "5%"}}>
                                <div className='merch__list__card__imgContainer'>
                                    {elem.purchase()[0] && elem.purchase()[0].linkToBuy !== "" ? 
                                        (<a target="_blank" href={elem.purchase()[0].linkToBuy}>
                                            <img className='merch__list__card__imgContainer__file' src={elem.itemPicture} alt={`image du ${elem.format}`}/>
                                        </a>)
                                        :
                                        (<>
                                            <img className='merch__list__card__imgContainer__file' src={elem.itemPicture} alt={`image du ${elem.format}`}/>
                                        </>)
                                    }
                                </div>
                                <div className='merch__list__card__infos'>
                                    <div className='merch__list__card__infos--format'>format : {elem.format}</div>
                                    <div className='merch__list__card__infos--description'>description : {elem.description}</div>
                                </div>
                                <div className='merch__list__card__shop'>
                                    {elem.purchase()[0] && elem.purchase()[0].linkToBuy !== "" ?
                                        (<a target="_blank" className='merch__list__card__shop--linkToBuy' href={elem.purchase()[0].linkToBuy}>{net.seasonShop}</a>)
                                        :
                                        (<></>)
                                    }
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Band;