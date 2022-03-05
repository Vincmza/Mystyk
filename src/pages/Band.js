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
    console.log(bandFiltered)
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
                    <div className='bio__lineUp'>
                        <h3 className='bio__lineUp bio__lineUp--title'>Line up</h3>
                        <ul className='bio__lineUp bio__lineUp--list'>
                            {bandFiltered.lineUp.map(elem=>(
                            <li key={elem.name}>
                                <div className='lineUp'>
                                    <div className='lineUp__member'>
                                        {elem.name} :
                                    </div>
                                    <ul className='lineUp__role'>
                                        {elem.instrument.map((item,index)=>(
                                            index !== elem.instrument.length-1 ?
                                            <li className='role' key={index}>
                                                {item},
                                            </li> : 
                                            <li className='role' key={index}>
                                                {item}.
                                            </li>)
                                        )}
                                    </ul>
                                </div>
                            </li>))}
                        </ul>
                    </div>
                </div>
                <div className='releases'>
                    <h3 className='releases__title'>Releases</h3>
                    <ul className='releases__list'>
                        {bandFiltered.releases.map((elem, index)=>(
                            <li className='releases__list--card' key={elem.id} style={{animationDelay : `${index*250}ms`}}>
                                <div className='releasesImgContainer'>
                                    <img className='releasesImg' src={elem.frontCover} alt={`Pochette de l'album ${elem.title}`}/>
                                </div>
                                <div className='infos'>
                                    <div className='infos__title'>{elem.title}</div>
                                    <div className='infos__date'>Release date : {elem.releaseDate}</div>
                                    <div className='infos__format'>Format : {elem.format}</div>
                                    <div className='infos__duration'>Duration : {elem.duration}</div>
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