import React from 'react';
import {news} from '../data/news';
import { useNavigate } from 'react-router-dom';
import {FaYoutube} from "react-icons/fa"

const News = (props) => {
    let navigate = useNavigate()
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
                (<li key={item.id} className="news__wrapper__oneNews" style={{animationDelay: `${index*400}ms`}}>
                    <div className='imgContainer'>
                        <img src={item.image} alt={`photo de ${item.bandName()}`}/>
                    </div>
                    <div className='newsContent'>
                        <div className='newsHeader'>
                            <div className='bandName' onClick={()=>goToBandPage(item.bandId, "bands")}>
                               {item.bandName()}
                            </div>
                            <div className='date'>
                                {item.date}
                            </div>
                        </div>
                        <div className='newsTitle'>
                            {item.title}
                        </div>
                        <div className='newsArticle'>
                            {item.content}
                        </div>
                        <div className='newsListen'>
                            {item.listen().length > 0 ?
                                (
                                <div className='newsListen__container'>
                                    <p className='newsListen__container--title'>Cliquez pour écouter : </p>
                                    <a className='newsListen__container--link' href={item.listen()[0].linkToListen}>
                                        <FaYoutube/>
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