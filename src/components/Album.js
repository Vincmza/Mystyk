import React, {useState} from 'react';
import * as net from "../data/icons";

const Album = ({elem, description, setDescription}) => {
    //FUNCTION TO EITHER SHOW OR HIDE ITEM INFOS
    const showOrHideDescription = (bandId, id)=>{ 
        const objectToRemove = description.findIndex(item=>item.band === bandId && item.item === id)
        if(objectToRemove !== -1){
            const object = [
                ...description.filter(objects=>objects!==description[objectToRemove])
            ]
            setDescription(object)
        }else{
            const object = [
                ...description,
                {band : bandId, item : id}
            ]
            setDescription(object)
        }
    }
    //DISPLAY ICONS
    const displayIcons = (iconsObject)=>{
        if(iconsObject){
            const data = Object.entries(iconsObject)
            console.log()
            return data.map(item=>(
                item[1] !== "" &&
                <a title={item[0] === "seasonShop" && "Acheter sur Season of Mist"} 
                target="_blank" 
                rel="noreferrer" 
                key={item} 
                className={`item__card__listenIcons--${item[0]}`} href={item[1]}
                style={{display : "flex", alignItems : "center"}}
                >
                    {net[item[0]]}
                </a>
            ))
        }      
    } 
    return (
        <div>
            <div className='item' key={elem.id}>                        
                {elem.releases.map((item,index)=>(
                    <div 
                    className='item__card' 
                    key={item.id} 
                    style={{animationDelay : `${index*300}ms`}}
                    >
                        <div className='item__card__imgContainer'>
                            {item.listenAndShop()[0] && item.listenAndShop()[0].seasonShop !== "" ? 
                                (<>
                                    <a 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    href={item.listenAndShop()[0].seasonShop}
                                    title="Acheter sur Season of Mist"
                                    >
                                        <img 
                                        className='item__card__imgContainer__file' 
                                        src={item.frontCover} 
                                        alt={`couverture de l'item ${item.title} de ${elem.name}`}
                                        />
                                    </a>
                                </>)
                                :
                                (<>
                                    <img 
                                    className='item__card__imgContainer__file' 
                                    src={item.frontCover} 
                                    alt={`couverture de l'item ${item.title} de ${elem.name}`}
                                    />
                                </>)
                            }
                        </div>
                        <div className='item__card__identity'>
                            <h2 className='item__card__identity--name'>{elem.name}</h2>
                            <h3 className='item__card__identity--title'>{item.title}</h3>
                        </div>
                        <div className='item__card__generalInfos'>
                            {description.findIndex(object=>object.band === item.bandId && object.item === item.id)!== -1 ?
                                
                                (<>
                                    <div 
                                    className='item__card__generalInfos__iconContainer'
                                    onClick={()=>showOrHideDescription(item.bandId, item.id)}
                                    >
                                        <div className='item__card__generalInfos__iconContainer--icon'>
                                            {net.hideDescription}
                                        </div>
                                    </div>
                                </>)
                                :
                                (<>
                                    <div 
                                    className='item__card__generalInfos__iconContainer'
                                    onClick={()=>showOrHideDescription(item.bandId, item.id)}
                                    >
                                        <div className='item__card__generalInfos__iconContainer--icon'>
                                            {net.showDescription}
                                        </div>
                                    </div>
                                </>)
                            }
                            {description.findIndex(object=>object.band === item.bandId && object.item === item.id)!== -1 ?
                                (<>
                                    <div className='item__card__generalInfos__description'>
                                        <div 
                                        className='item__card__generalInfos__description--itemFeature'
                                        >
                                            Style : {item.subStyle}
                                        </div>
                                        <div 
                                        className='item__card__generalInfos__description--itemFeature'
                                        >
                                            Format : {item.format}
                                        </div>
                                        <div 
                                        className='item__card__generalInfos__description--itemFeature'
                                        >
                                            Length : {item.duration}
                                        </div>
                                        <div 
                                        className='item__card__generalInfos__description--itemFeature'
                                        >
                                            Release date : {item.releaseDate}
                                        </div>
                                    </div>
                                </>)
                                :
                                (<>
                                    <div className='item__card__generalInfos__description'></div>
                                </>)
                            }
                            
                        </div>
                        <div className='item__card__listenIcons'>
                            {displayIcons(item.listenAndShop()[0])}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Album;