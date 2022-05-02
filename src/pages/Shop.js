import React, { useState } from 'react';
//DATA
import { bands } from '../data/bands';
//ICONS
import * as net from "../data/icons";
//COMPONENTS
import Album from '../components/Album';
import Merch from '../components/Merch';
const Shop = () => {
    //OPTIONS TO EITHER DISPLAY MUSIC OR MERCH
    const options = ["music", "merch"]
    //STATE TO STORE EITHER MUSCI OR MERCH OPTION
    const [shopOption, setShopOption] = useState([])
    //DISPLAY ITEM DETAILS
    const [description, setDescription]=useState([])
    console.log(description)
    //HIDE OR DISPLAY FILTERS
    const [showFilters, setShowFilters]=useState(false)
    const displayFilters = ()=>{
        setShowFilters((e)=>(!e))
    }
    //STORE DATA FROM CHECKBOX
    const storeShopOption = (e)=>{
        if(e.target.checked === true){
            setShopOption([e.target.value])
            setDescription([])
        }
    }
    const CheckMerchLength = ()=>{
        let count = 0
        bands.forEach(element => {
            let merch = element.merch.length
            if(merch === 0){
                count += 1
            }
        });
        if(count === bands.length){
            return <h1 style={{textAlign : "center", marginTop : "15px"}}>Aucun article disponible actuellement</h1>
        }
        console.log("compteur : ",count, "données : ", bands.length)
    }
    return (
        <div className='shop'>
            <h1 className='shopIntro'>Shop</h1>
            <div className='shop__wrapper'>
                <div className='shop__wrapper__options'>
                    <input 
                    type="button" 
                    value="Filtres" 
                    className='shop__wrapper__options__filters' 
                    onClick={displayFilters}
                    />
                    {showFilters === true ? 
                        (<>
                            {options.map((elem,index)=>(
                                <div 
                                className={`shop__wrapper__options--${elem}`} 
                                key={elem} 
                                style={{animationDelay : `${index*250}ms`}}
                                >
                                    <input 
                                    type="checkbox" 
                                    id={elem} 
                                    name={elem}
                                    value={elem}
                                    onChange={(e)=>storeShopOption(e)}
                                    checked={shopOption.some(item => item === elem)}
                                    />
                                    <label htmlFor={elem}>{elem}<span>{net[elem]}</span></label>
                                </div>
                            ))}
                        </>) 
                        : 
                        (<>
                        </>)
                    }
                </div>
                {shopOption[0] === "music" && 
                    bands.map((elem)=>(<><Album key={elem.id} elem={elem} description={description} setDescription={setDescription}/></>
                    ))
                }
                {CheckMerchLength()}                       
                {shopOption[0] === "merch" && 
                    bands.map((elem)=>( <><Merch key={elem.id} elem={elem} description={description} setDescription={setDescription}/></>
                    ))
                }
            </div>
        </div>
    );
};

export default Shop;