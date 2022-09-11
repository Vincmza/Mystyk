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
    const chunkContainingIcons = (network, key, value)=>{
        const data = {
            seasonShop:"Buy on Season of Mist",
            youTube: "Listen on Youtube",
            facebook: "Facebook event"
        }
        
        return <><div className='newsCard__container__listen__container'>
        <p 
        className='newsCard__container__listen__container--title'
        >
            {data[network]}: 
        </p>
        <a 
        target="_blank" 
        rel="noreferrer" 
        className={`newsCard__container__listen__container--${key}`} 
        href={value}
        >
            {net[key]}
        </a>
        </div></>
    }
    //DISPLAY ICON OF SOCIAL MEDIA TO LISTEN A TUNE FROM THE CURRENT NEWS
    const displayIcons = (link)=>{      
        if(link){
            for (const [key, value] of Object.entries(link)) {
                if(value !== ""){
                    let goToLowerCase = key.toLowerCase()
                    switch(goToLowerCase){
                        case "seasonshop":
                            return chunkContainingIcons("seasonShop", key, value)
                            
                        case "youTube":
                            return chunkContainingIcons("youTube", key, value)
                               
                        case "facebook":
                            return chunkContainingIcons("facebook", key, value)
                        default:
                            console.log("No corresponding case")
                    }
                }
            }
        }
    }
    const throwAccessToBandPage = (bandIdKey, item)=>{
        const eventURL = Object.entries(item.link()[0])[0]
        return bandIdKey !== "" ? 
        <>
            <div className='newsCard__container__header'>
            <div 
            className='newsCard__container__header--bandName' 
            onClick={()=>goToBandPage(item.bandId, "bands")}
            >
                {item.bandOrEvent()}
            </div>
            <div className='newsCard__container__header--date'>
                    {item.date}
            </div>
            </div>
        </> : 
        <>
            <div className='newsCard__container__header'>
                <div className='newsCard__container__header--bandName'>
                    <a 
                    href={eventURL[1]}
                    target="_blank" 
                    rel="noreferrer"
                    >
                        {item.bandOrEvent()}
                    </a>
                </div>
                <div className='newsCard__container__header--date'>
                        {item.date}
                </div>
            </div>
        </>
    }
    return (
        <div className='news'>
            <ul className='news__wrapper'>
                <h1 className='newsIntro'>Latest news</h1>
                {news.map((item,index)=>
                (
                <li 
                key={item.id}
                data-testid={item.id} 
                className="newsCard"
                name="newsCard" 
                style={{animationDelay: `${index*200}ms`}}
                >
                    <div className='newsCard__imgContainer'>
                        <img src={item.image} alt={`photo de ${item.bandOrEvent()}`}/>
                    </div>
                    <div className='newsCard__container'>
                        {throwAccessToBandPage(item.bandId, item)}
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
                            {displayIcons(item.link()[0])}
                        </div>
                    </div>                   
                </li>))}
            </ul>
           
        </div>
    );
};

export default News;