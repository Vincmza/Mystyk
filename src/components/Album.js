import React from 'react';
import * as net from "../data/icons";


const Album = ({elem, item, sortedByDate ,description, setDescription, index}) => {
    //OPTIONS TO TRANSFORM RELEASE DATE
    let options = {year: "numeric", month: "long", day: "numeric"};
    //FUNCTION TO EITHER SHOW OR HIDE ITEM INFOS
    const showOrHideDescription = (bandId, id)=>{ 
        const objectToRemove = description.findIndex(element=>element.band === bandId && element.item === id)
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
            return data.map(element=>(
                element[1] !== "" &&
                <a 
                title={element[0] === "seasonShop" && "Acheter sur Season of Mist"} 
                target="_blank" 
                rel="noreferrer" 
                key={element} 
                className={`item__card__listenIcons--${element[0]}`} href={element[1]}
                style={{display : "flex", alignItems : "center"}}
                >
                    {net[element[0]]}
                </a>
            ))
        }      
    }
    return (
        <div>
            <div className='item slide' style={{animationDelay : `${index*200}ms`}}>                        
                <div className='item__card'>
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
                        <h4>{sortedByDate === true && new Date(item.releaseDate).toLocaleString("en-GB", options)}</h4>
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
                                        Release date : {new Date(item.releaseDate).toLocaleString("en-GB", options)}
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
            </div>
        </div>
    );
};

export default Album;