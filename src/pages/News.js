import React from 'react';
import {news} from '../data/news';

const News = () => {
    return (
        <div className='news'>
            <ul className='news__wrapper'>
                {news.map((item,index)=>
                (<li key={item} className="news__wrapper__oneNews" style={{animationDelay: `${index*400}ms`}}>
                    <div className='imgContainer'>
                        <img src={item.image} alt={`photo de ${item.bandName()}`}/>
                    </div>
                    <div className='newsContent'>
                        <div className='newsHeader'>
                            <div className='bandName'>
                                {item.bandName()}
                            </div>
                            <div className='date'>
                                {item.date}
                            </div>
                        </div>
                        <div className='newsArticle'>
                            {item.content}
                        </div>
                    </div>
                </li>))}
            </ul>
           
        </div>
    );
};

export default News;