import React, { useState } from 'react';
//ICONS
import * as net from "../data/icons";
//COMPONENTS
import Album from '../components/Album';
import Merch from '../components/Merch';
const Shop = ({bands}) => {
    //OPTIONS TO EITHER DISPLAY MUSIC OR MERCH
    const options = ["music", "merch"]
    //STATE TO STORE EITHER MUSCI OR MERCH OPTION
    const [shopOption, setShopOption] = useState([])
    //DISPLAY ITEM DETAILS THAT IS STORED, THAT IS TO SAY ITEM IS CLICKED BY USER
    const [description, setDescription]=useState([])
    //HIDE OR DISPLAY FILTERS
    const [showFilters, setShowFilters]=useState(false)
    const displayFilters = ()=>{
        setShowFilters((e)=>(!e))
    }
    //STATE TON HANDLE SORT SHOP FEATURE
    const [isSorted, setIsSorted] = useState(["name"])
    //ALL RELEASES FROM ALL BANDS
    const allReleases = bands.map(item => item.releases[0])
    //STORE DATA FROM CHECKBOX
    const storeShopOption = (e)=>{
        if(e.target.checked === true){
            setShopOption([e.target.value])
            setDescription([])
        }
    }
    //IF NO ITEM IN MERCH ARRAY RETURN H1 TAG
    const CheckMerchLength = ()=>{
        let count = 0
        bands.forEach(element => {
            let merch = element.merch.length
            if(merch === 0){
                count += 1
            }
        });
        if(count === bands.length && shopOption[0] === "merch"){
            return <h1 style={{textAlign : "center", marginTop : "15px"}}>Aucun article disponible actuellement</h1>
        }
    }
    //SORT ALL RELEASES PER YEAR
    function sortShop(albums, sortValue){
        if(sortValue === "date"){
            return albums.sort((a,b)=>{
                return new Date(a.releaseDate) - new Date(b.releaseDate)
              })
        }
        if(sortValue === "name"){
            return albums.sort()
        }
    }
    const storeSort = (value)=>{
        setIsSorted(()=>[value])
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
                                    
                                    {shopOption[0] === "music" && elem === "music" ? 
                                    (<>
                                        <input 
                                        type="button"
                                        value={isSorted[0] === "name" ? "Sort by release date" : "Sort by A-Z"}
                                        onClick={()=>storeSort(isSorted[0] === "name" ? "release_date" : "name")}
                                        className='sort_input'
                                        style={{animationDelay : `${index*250}ms`}}
                                        />
                                    </>)
                                    :
                                    (<></>)
                                    }
                                </div>
                            ))}
                        </>) 
                        : 
                        (<>
                        </>)
                    }
                </div>
                <div className='shop__wrapper__item'>
                    {shopOption[0] === "music" && isSorted[0] === "release_date" ? 
                        (
                            sortShop(allReleases, "date").map((item,index)=>(
                                <Album
                                sortedByDate={true}
                                index={index}
                                key={item.id}
                                item={item}
                                elem={bands.filter(elem=>elem.id === item.bandId)}
                                description={description}
                                setDescription={setDescription}
                                />
                            ))
                        )
                        :
                        (<></>)
                    }
                    {shopOption[0] === "music" && isSorted[0] === "name" ?
                        (
                            sortShop(allReleases, "name").map((item,index)=>(
                                <Album
                                sortedByDate={false}
                                index={index}
                                key={item.id}
                                item={item}
                                elem={bands.filter(elem=>elem.id === item.bandId)}
                                description={description}
                                setDescription={setDescription}
                                />
                            ))
                        )
                        :
                        (<></>) 
                    }
                </div>
                {CheckMerchLength()}
                <div className='shop__wrapper__item'>                          
                    {shopOption[0] === "merch" && 
                        bands.map((elem)=>(
                            elem.merch.map((item,index)=>(
                                <>
                                <Merch 
                                key={item.id} 
                                elem={elem}
                                item={item}
                                index={index}
                                description={description} 
                                setDescription={setDescription}
                                />
                                </>
                            ))
                        
                        ))
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Shop;