import React, { useState } from 'react';
import { bands } from '../data/bands';
import * as net from "../data/icons";
const Shop = () => {
    //OPTIONS TO EITHER DISPLAY MUSIC OR MERCH
    const options = ["music", "merch"]
    //STATE TO STORE EITHER MUSCI OR MERCH OPTION
    const [shopOption, setShopOption] = useState([])
    //HIDE OR DISPLAY FILTERS
    const [showFilters, setShowFilters]=useState(false)
    const displayFilters = ()=>{
        setShowFilters((e)=>(!e))
    }
    //DISPLAY ITEM DETAILS
    const [description, setDescription]=useState([])
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
    // console.log(description)
    //STORE DATA FROM CHECKBOX
    const storeShopOption = (e)=>{
        if(e.target.checked === true){
            setShopOption([e.target.value])
        }
    }
    //DISPLAY ICONS
    const displayIcons = (iconsObject)=>{
        if(iconsObject){
            const data = Object.entries(iconsObject)
            return data.map(item=>(
                item[1] !== "" &&
                <a key={item} className={`music__card__listenIcons--${item[0]}`} href={item[1]}>
                {net[item[0]]}
                </a>
            ))
        }      
    }
    return (
        <div className='shop'>
            <h1 className='shopIntro'>Shop</h1>
            <div className='shop__wrapper'>
                <div className='shop__wrapper__options'>
                    <input type="button" value="Filtres" className='shop__wrapper__options__filters' onClick={displayFilters}/>
                    {showFilters === true ? 
                        (<>
                            {options.map((elem,index)=>(
                                <div className={`shop__wrapper__options--${elem}`} key={elem} style={{animationDelay : `${index*300}ms`}}>
                                    <input 
                                    type="checkbox" 
                                    id={elem} 
                                    name={elem}
                                    value={elem}
                                    onChange={(e)=>storeShopOption(e)}
                                    checked={shopOption.some(item => item === elem)}
                                    />
                                    <label htmlFor={elem}>{elem}</label>
                                </div>
                            ))}
                        </>) 
                        : 
                        (<>
                        </>)
                    }
                </div>
                <div className='shop__wrapper__music'>
                    {shopOption[0] === "music" && 
                        bands.map((elem)=>(
                            <div className='music' key={elem.id}>                           
                                {elem.releases.map((item,index)=>(
                                    <div className='music__card' key={item.id} style={{animationDelay : `${index*400}ms`}}>
                                        <div className='music__card__imgContainer'>
                                            <img className='music__card__imgContainer__file' src={item.frontCover} alt={`couverture de l'album ${item.title} de ${elem.name}`}/>
                                        </div>
                                        <div className='music__card__identity'>
                                            <h2 className='music__card__identity--name'>{elem.name}</h2>
                                            <h3 className='music__card__identity--title'>{item.title}</h3>
                                        </div>
                                        <div className='music__card__generalInfos'>
                                            {description.findIndex(object=>object.band === item.bandId && object.item === item.id)!== -1 ?
                                                
                                                (<>
                                                    <div 
                                                    className='music__card__generalInfos__iconContainer'
                                                    onClick={()=>showOrHideDescription(item.bandId, item.id)}
                                                    >
                                                        <div className='music__card__generalInfos__iconContainer--icon'>
                                                            {net.hideDescription}
                                                        </div>
                                                    </div>
                                                </>)
                                                :
                                                (<>
                                                    <div 
                                                    className='music__card__generalInfos__iconContainer'
                                                    onClick={()=>showOrHideDescription(item.bandId, item.id)}
                                                    >
                                                        <div className='music__card__generalInfos__iconContainer--icon'>
                                                            {net.showDescription}
                                                        </div>
                                                    </div>
                                                </>)
                                            }
                                            {description.findIndex(object=>object.band === item.bandId && object.item === item.id)!== -1 ?
                                                (<>
                                                    <div className='music__card__generalInfos__description'>
                                                        <div>Style : {item.subStyle}</div>
                                                        <div>Format : {item.format}</div>
                                                        <div>Length : {item.duration}</div>
                                                        <div>Release date : {item.releaseDate}</div>
                                                    </div>
                                                </>)
                                                :
                                                (<>
                                                </>)
                                            }
                                            
                                        </div>
                                        <div className='music__card__listenIcons'>
                                            {displayIcons(item.listenAndShop()[0])}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;