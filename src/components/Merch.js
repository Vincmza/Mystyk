import React from 'react';
import * as net from "../data/icons";

const Merch = ({elem, description, setDescription}) => {
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
    return (
        <div>
            <div className='item' key={elem.id}>                       
                {elem.merch.map((item,index)=>(
                    <div 
                    className='item__card' 
                    key={item.id} 
                    style={{animationDelay : `${index*250}ms`}}
                    >
                        <div className='item__card__imgContainer'>
                            {item.purchase()[0] && item.purchase()[0].linkToBuy !== "" ? 
                                (<>
                                    <a 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    href={item.purchase()[0].linkToBuy}
                                    title="Cliquez pour acheter"
                                    >
                                        <img 
                                        className='item__card__imgContainer__file' 
                                        src={item.itemPicture} 
                                        alt={`photo de ${item.format} du groupe ${elem.name}`}
                                        />
                                    </a>
                                </>)
                                :
                                (<>
                                    <img 
                                    className='item__card__imgContainer__file' 
                                    src={item.itemPicture} 
                                    alt={`photo de ${item.format} du groupe ${elem.name}`}
                                    />
                                </>)
                            }
                        </div>
                        <div className='item__card__identity'>
                            <h2 className='item__card__identity--name'>{elem.name}</h2>
                            <h3 className='item__card__identity--title'>{item.format}</h3>
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
                                        <div className='item__card__generalInfos__description--title'>Description : </div>
                                        <div>{item.description}</div>
                                    </div>
                                </>)
                                :
                                (<>
                                </>)
                            }
                        </div>
                        <div className='item__card__merchBuyIcon'>
                            {item.purchase()[0] && item.purchase()[0].linkToBuy !== "" &&
                                <a 
                                title="Cliquez pour acheter" 
                                target="_blank" 
                                rel="noreferrer" 
                                key={item} 
                                className={`item__card__merchBuyIcon--icon`} 
                                href={item.purchase()[0].linkToBuy}
                                >
                                    {net.seasonShop}
                                </a>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Merch;