import React from 'react';
//ICONS
import * as net from "../../data/icons";

const FiltersMusicMerch = ({
    displayFilters,
    showFilters,
    shopOption,
    options,
    setShopOption,
    setDescription,
    sortStore,
    setIsSorted,
    sortAlbums
    
}) => {
    //STORE DATA FROM CHECKBOX
    const storeShopOption = (e)=>{
        if(e.target.checked === true){
            setShopOption([e.target.value])
            setDescription([])
            if(e.target.value === "merch"){
                setIsSorted("all")
            }
            if(e.target.value === "music"){
                setIsSorted("A-Z")
            }
        }
    }
    return (
        <div className='shop__wrapper__options'>
            <input 
            type="button" 
            value="Filtres" 
            className="shop__wrapper__options__filters"
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
                            <div className='choice_container'>
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
                        </div>
                    ))}
                </>) 
                : 
                (<></>)
            }
        </div>
    );
};

export default FiltersMusicMerch;