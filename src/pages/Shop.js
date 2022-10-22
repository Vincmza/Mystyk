import React, { useState } from 'react';

//COMPONENTS
import Album from '../components/Album';
import Merch from '../components/Merch';
import FiltersMusicMerch from '../components/Shop/FiltersMusicMerch';
import SortMusic from '../components/Shop/SortMusic';
import SortMerch from '../components/Shop/SortMerch';

const Shop = ({bands}) => {

    //COMMON STATE TO STORE CHECKBOX CLICK VALUE : MUSIC OR MERCH
    const [shopOption, setShopOption] = useState([])

    // ***** STATES & RESSOURCES MUSIC ***** //

    //***// MUSIC

    //ALL RELEASES FROM ALL BANDS
    const albumsAvailable = bands.filter(elem => elem.releases.length > 0)
    const allRecords = []
    albumsAvailable.forEach((elem)=>{
        elem.releases.forEach(item=>{
            allRecords.push(item)
        })
    })

    // RECORDS SORTED ACCORDING TO VALUE IN DATASORTVALUE
    const [musicSorted, setMusicSorted] = useState(allRecords)
    
    // ***** STATES & RESSOURCES MERCH ***** //

    //***// MERCH

    //ALL MERCH ITEMS FROM ALL BANDS
    const merchAvailable = bands.filter(elem => elem.merch.length > 0)
    const allMerch = []

    merchAvailable.forEach((elem)=>{
        elem.merch.forEach(item=>{
            allMerch.push(item)
        })
    })

    // MERCH SORTED ACCORDING TO VALUE IN DATASORTVALUE
    const [merchSorted, setMerchSorted] = useState(allMerch)
   
    // MUSIC //
    // SORT MUSIC SHOP
    function sortMusic(sortValue, styleValue){
        switch (sortValue){
            case "Release date":
                const data = allRecords.sort((a,b)=>{
                   return new Date(a.releaseDate) - new Date(b.releaseDate)
                })
                setMusicSorted(data)
                break
            case "A-Z":
                setMusicSorted(allRecords)
                break
            case "Style":
                if(styleValue !== ""){
                    const albumsSortedByStyle = allRecords.filter(album => album.style === styleValue)
                    setMusicSorted(albumsSortedByStyle)
                }
                break  
        }
    }

    // MERCH //
    // SORT MERCH SHOP
    const sortMerchShop = (value)=>{
        if(value !== "All"){
            const getItemsWithValueAsFormat = allMerch.filter(item=>item.format === value)
            setMerchSorted(getItemsWithValueAsFormat)
        }
        else{
            setMerchSorted(allMerch)
        }
    }
    
    return (
        <div className='shop'>
            <h1 className='shopIntro'>Shop</h1>
            <div className='shop__wrapper'>
                <div className='shop__wrapper__options'>
                    <FiltersMusicMerch 
                    shopOption={shopOption}
                    setShopOption={setShopOption}
                    
                    />
                    {shopOption[0] === "music" && musicSorted.length > 0 ? 
                        (<SortMusic
                            shopOption={shopOption}
                            allRecords={allRecords}
                            sortMusic={sortMusic}
                        />)
                        :
                        (<></>)
                    }
                    {shopOption[0] === "merch" && merchSorted.length > 0 ? 
                        (<SortMerch
                            shopOption={shopOption}
                            allMerch={allMerch}
                            sortMerchShop={sortMerchShop}
                        />)
                        :
                        (<></>)
                    }
                    {shopOption[0] === "merch" && merchSorted.length === 0 && <h2>Aucun article disponible actuellement</h2>}
                    
                </div>
                {shopOption[0] === "music" && 
                    <div className='shop__wrapper__item'>
                    {
                    musicSorted.map((item,index)=>(
                        <Album
                            sortedByDate={false}
                            index={index}
                            key={Math.random()}
                            elem={bands.filter(elem=>elem.id === item.bandId)}
                            item={item}
                        />
                    ))
                    }
                    </div>
                }
                {shopOption[0] === "merch" &&
                    <div className='shop__wrapper__item'>
                        {merchSorted.map((item,index)=>(
                            <Merch
                                elem={bands.filter(elem => elem.id === item.bandId)}
                                item={item}
                                index={index}
                                key={Math.random()}
                            />
                        ))}          
                    </div>
                }
            </div>
        </div>
    );
};

export default Shop;