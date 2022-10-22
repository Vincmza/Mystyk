import React, { useState } from 'react';

//COMPONENTS
import Album from '../components/Album';
import Merch from '../components/Merch';
import FiltersMusicMerch from '../components/Shop/FiltersMusicMerch';
import SortMusic from '../components/Shop/SortMusic';
import SortMerch from '../components/Shop/SortMerch';

const Shop = ({bands}) => {


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

    //VALUE TO HELP TO SORT THE RECORDS DISPLAYED IN THE COMPONENT
    const [dataSortValue, setDataSortValue] = useState("")
    // RECORDS SORTED ACCORDING TO VALUE IN DATASORTVALUE
    const [musicSorted, setMusicSorted] = useState(allRecords)
    //WHICH MUSIC STYLE USER CHOOSES
    const [isStyleChoosen, setIsStyleChoosen]=useState("")

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
    // SATE TO IMPROVE USER EXP ABOUT DESIGN AFTER CLICKING
    const [merchSortValue,setMerchSortValue] = useState("")
    console.log({merchSortValue})
    
    // ***** COMMON RESSOURCES : STATE AND FUNCTIONS MUSIC & MERCH ***** //

    //STATE TO STORE CHECKBOX CLICK VALUE : MUSIC OR MERCH
    const [shopOption, setShopOption] = useState([])

    //FUNCTION UPDATING STATE MUSICSORTVALUE and MERCHSORTVALUE
    //AND UPDATING STATE WHERE ALL RECORDS ARE STORED
    const sortStore = (value)=>{
        if(shopOption[0] === "music"){
            setDataSortValue("")
            setDataSortValue(value)
            if(value !== "Style"){
                setIsStyleChoosen("")
                sortMusic(value)
            }
            sortMusic(value)
        }else if(shopOption[0] === "merch"){
            setMerchSortValue(value)
            sortMerchShop(value)
        }

    }
    
    // MUSIC //

    // GET STYLE CHOOSEN AND CALL FUNCTION TO SORT MUSIC ACCORDING TO THAT VALUE
    const whichStyle = (style)=>{
        setIsStyleChoosen(style)
        sortMusic("Style", style)
    }
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
                    setIsStyleChoosen={setIsStyleChoosen}
                    setDataSortValue={setDataSortValue}
                    />
                    {shopOption[0] === "music" ? 
                        (<SortMusic
                            shopOption={shopOption}
                            sortStore={sortStore}
                            dataSortValue={dataSortValue}
                            allRecords={allRecords}
                            whichStyle={whichStyle}
                            isStyleChoosen={isStyleChoosen}
                        />)
                        :
                        (<SortMerch
                            shopOption={shopOption}
                            sortStore={sortStore}
                            allMerch={allMerch}
                            merchSortValue={merchSortValue}
                        />)
                    }
                    
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
                {shopOption[0] === "merch"&&
                    <div className='shop__wrapper__item'>
                        {
                            merchSorted.map((item,index)=>(
                                <Merch
                                    elem={bands.filter(elem => elem.id === item.bandId)}
                                    item={item}
                                    index={index}
                                    key={Math.random()}
                                />
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Shop;