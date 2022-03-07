import { bands } from '../data/bands';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';


const Band = () => {
    //GOT ID OF THE BAND IN URL
    let {bandId}=useParams()
    //TRANSFORMED IN A NUMBER TYPE
    let id = Number(bandId)
    //GOT ALL BAND'S DATA
    const bandFiltered = bands.filter(elem=> elem.id === id)[0]
    //CONDITIONNALE STYLE
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
                    <ul className='releases__list' style={{justifyContent : bandFiltered.releases.length > 2 ? "space-between" : "unset"}}>
                        {bandFiltered.releases.map((elem, index)=>(
                            <li className='releases__list__card' key={elem.id} style={{animationDelay : `${index*250}ms`, marginRight : bandFiltered.releases.length <= 2 ? "60px" : "0px"}}>
                                <div className='releases__list__card__imgContainer'>
                                    <img className='releases__list__card__imgContainer__file' src={elem.frontCover} alt={`Pochette de l'album ${elem.title}`}/>
                                </div>
                                <div className='releases__list__card__infos'>
                                    <div className='releases__list__card__infos--title'>{elem.title}</div>
                                    <div className='releases__list__card__infos--date'>Release date : {elem.releaseDate}</div>
                                    <div className='releases__list__card__infos--format'>Format : {elem.format}</div>
                                    <div className='releases__list__card__infos--duration'>Duration : {elem.duration}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='merch'>
                    <h3 className='merch__title'>Merch</h3>
                    <ul className='merch__list' style={{justifyContent : bandFiltered.merch.length > 2 ? "space-between" : "unset"}}>
                        {bandFiltered.merch.map((elem,index)=>(
                            <li key={elem.id} className="merch__list__card" style={{animationDelay : `${index*250}ms`, marginRight : bandFiltered.merch.length <= 2 ? "60px" : "0px"}}>
                                <div className='merch__list__card__imgContainer'>
                                    <img className='merch__list__card__imgContainer__file' src={elem.itemPicture} alt={`image du ${elem.format}`}/>
                                </div>
                                <div className='merch__list__card__infos'>
                                    <div className='merch__list__card__infos--format'>format : {elem.format}</div>
                                    <div className='merch__list__card__infos--description'>description : {elem.description}</div>
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