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
    return (
        <div className='news'>
            <ul className='news__wrapper'>
                <h1 className='newsIntro'>Latest news</h1>
                {news.map((item,index)=>
                (<li key={item.id} className="newsCard" style={{animationDelay: `${index*400}ms`}}>
                    <div className='newsCard__imgContainer'>
                        <img src={item.image} alt={`photo de ${item.bandName()}`}/>
                    </div>
                    <div className='newsCard__newsContent'>
                        <div className='newsCard__newsContent__newsHeader'>
                            <div className='newsCard__newsContent__newsHeader--bandName' onClick={()=>goToBandPage(item.bandId, "bands")}>
                               {item.bandName()}
                            </div>
                            <div className='newsCard__newsContent__newsHeader'>
                                {item.date}
                            </div>
                        </div>
                        <div className='newsCard__newsContent__newsTitle'>
                            {item.title}
                        </div>
                        <div className='newsCard__newsContent__newsArticle'>
                            {item.content}
                        </div>
                        <div className='newsCard__newsContent__newsListen'>
                            {item.listen().length > 0 ?
                                (
                                <div className='newsCard__newsContent__newsListen__container'>
                                    <p className='newsCard__newsContent__newsListen__container--title'>Cliquez pour écouter : </p>
                                    <a className='newsCard__newsContent__newsListen__container--link' href={item.listen()[0].linkToListen}>
                                        {net.youTubeIcon}
                                    </a>
                                </div>
                                )
                                :
                                (<></>)
                            }
                        </div>
                    </div>
                </li>))}
            </ul>
           
        </div>
    );
};

export default News;