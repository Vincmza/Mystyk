import React from 'react';
import {news} from '../data/news';
import { useNavigate } from 'react-router-dom';
import * as net from "../data/icons";

const News = (props) => {
    let navigate = useNavigate()
    //GO TO BAND PAGE WHEN BAND NAME IS CLICKED
    const goToBandPage = (bandId, pageName)=>{
        props.isPageClicked.length > 0 && props.isPageClicked.shift()
        localStorage.clear()
        localStorage.setItem("menu", pageName)
        props.setIsPageClicked([pageName])
        navigate(`/band/${bandId}`)
    }
    //DISPLAY ICON OF SOCIAL MEDIA TO LISTEN A TUNE FROM THE CURRENT NEWS
    const displayIcons = (link)=>{
        
        if(link){
            for (const [key, value] of Object.entries(link)) {
                if(value !== ""){
                    let goToLowerCase = key.toLowerCase()
                    const upperCase = goToLowerCase.split("")[0].toUpperCase()
                    return <div className='newsCard__container__listen__container'>
                    <p 
                    className='newsCard__container__listen__container--title'
                    >
                        Ecouter sur {goToLowerCase.replace(goToLowerCase[0], upperCase[0]).toString()} : 
                    </p>
                    <a 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`newsCard__container__listen__container--${key}`} 
                    href={value}
                    >
                        {net[key]}
                    </a>
                </div>  
                }
            }
        }

    }
    return (
        <div className='news'>
            <ul className='news__wrapper'>
                <h1 className='newsIntro'>Latest news</h1>
                {news.map((item,index)=>
                (
                <li 
                key={item.id} 
                className="newsCard" 
                style={{animationDelay: `${index*400}ms`}}
                >
                    <div className='newsCard__imgContainer'>
                        <img src={item.image} alt={`photo de ${item.bandName()}`}/>
                    </div>
                    <div className='newsCard__container'>
                        <div className='newsCard__container__header'>
                            <div className='newsCard__container__header--bandName' onClick={()=>goToBandPage(item.bandId, "bands")}>
                                {item.bandName()}
                            </div>
                            <div className='newsCard__container__header--date'>
                                    {item.date}
                            </div>
                        </div>
                        <div className='newsCard__container__title'>
                            <span className='newsCard__container__title--icon'>
                                {net.evil}
                            </span>
                            <span>
                                {item.title}
                            </span>
                        </div>
                        <div className='newsCard__container__article'>
                            {item.content}
                        </div>
                        <div className='newsCard__container__listen'>
                            {displayIcons(item.listen()[0])}
                        </div>
                    </div>                   
                </li>))}
            </ul>
           
        </div>
    );
};

export default News;