import React, { useState } from 'react';

//COMPONENTS
import Album from '../components/Album';
import Merch from '../components/Merch';
import FiltersMusicMerch from '../components/Shop/FiltersMusicMerch';
import SortMusic from '../components/Shop/SortMusic';
import SortMerch from '../components/Shop/SortMerch';

const Shop = ({bands}) => {

    //STATE TO STORE CHECKBOX CLICK VALUE : MUSIC OR MERCH
    const [shopOption, setShopOption] = useState([])
    //VALUE TO HELP TO SORT THE RECORDS DISPLAYED IN THE COMPONENT
    const [dataSortValue, setDataSortValue] = useState("")
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

    //FUNCTION UPDATING STATE DATASORTVALUE
    //AND UPDATING STATE WHERE ALL RECORDS ARE STORED
    const sortStore = (value)=>{
        setDataSortValue("")
        setDataSortValue(value)
        if(value !== "Style"){
            setIsStyleChoosen("")
            sortMusic(value)
        }
        sortMusic(value)
    }
    //WHICH MUSIC STYLE USER CHOOSES
    const [isStyleChoosen, setIsStyleChoosen]=useState("")

    const whichStyle = (style)=>{
        setIsStyleChoosen(style)
        sortMusic("Style", style)
    }

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

    // *** MERCH SECTION *** \\

    //ALL MERCH ITEMS FROM ALL BANDS
    const merchAvailable = bands.filter(elem => elem.merch.length > 0)
    const allMerch = []
    merchAvailable.forEach((elem)=>{
        elem.merch.forEach(item=>{
            allMerch.push(item)
        })
    })

    //MERCH ITEMS FORMAT GATHERED
    let allMerchFormat = allMerch.reduce((acc,cv)=>{
        acc.includes(cv.format) || acc.push(cv.format)
        return acc
    },[])

    //ADDING ALL AS A DATA OF THE ALLFORMAT ARRAY
    //LATER IT CAN BE CREATED AS AN INPUT
    const allFormat = [...allMerchFormat]
    allFormat.unshift("all")

    // --- MERCH FUNCTIONS

    //MAKE SURE MERCH ITEMS ARE AVAILABLE TO DISPLAY
    const checkIfMerchItemsAreAvailable = ()=>{
        let count = 0
        bands.forEach(element => {
            let merch = element.merch.length
            if(merch > 0) count +=1
        });
        return count
    }

    //IF NO ITEM IN MERCH ARRAY RETURN MESSAGE TO INFORM USER
    const CheckMerchLength = ()=>{
        if(checkIfMerchItemsAreAvailable() === 0 && shopOption[0] === "merch"){
            return <h1 style={{textAlign : "center", marginTop : "15px"}}>Aucun article disponible actuellement</h1>
        }
    }  
    //RETURN MERCH ITEMS SORTED ACCORDING USER CHOICE
    const sortMerchItems = (format)=>{
        // console.log(format)
        if(format !== "all"){
            return allMerch.map((item, index)=>(
                item.format === format &&
                <Merch 
                key={item.id} 
                elem={bands.filter(elem => elem.id === item.bandId)[0]}
                item={item}
                index={index}
                
                />
            ))
        }
        if(format === "all"){
            return allMerch.map((item,index)=>(
                <Merch 
                key={item.id} 
                elem={bands.filter(elem => elem.id === item.bandId)[0]}
                item={item}
                index={index}
                
                />
            ))
        }
    }
    //CREATE INPUTS TO SORT MERCH ITEMS BY FORMAT
    const createInputsMerchSection = ()=>{
        //IF ARRAYS OF ALL BANDS 
        //CONTAINING MERCH ITEMS ARE ALL EMPTY 
        //CONSOLE LOG IS RETURNED
        if(checkIfMerchItemsAreAvailable() === 0 && shopOption[0] === "merch"){
            return console.log("Pas de merch")
        }
        //OTHERWISE INPUTS TO SORT MERCH SECTION ARE RETURNED
        else{
            return shopOption[0] === "merch" && allFormat.map((item,index)=>(
                <input 
                type="button" 
                key={item} 
                value={item}
                className={`sort__list__options__input`}
                style={
                     {
                     animationDelay: `${index*150}ms`,
                     backgroundColor: `${dataSortValue === item ? "rgb(117, 7, 7)" : "wheat"}`,
                     color : `${dataSortValue === item ? "wheat" : "rgb(117, 7, 7)" }`
                     }
                 }
                 onClick={(e)=>sortStore(e.target.value)}
                />))
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
                    <SortMusic
                    shopOption={shopOption}
                    sortStore={sortStore}
                    dataSortValue={dataSortValue}
                    allRecords={allRecords}
                    whichStyle={whichStyle}
                    isStyleChoosen={isStyleChoosen}
                    />
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
                {CheckMerchLength()}
                <SortMerch
                createInputsMerchSection={createInputsMerchSection}
                shopOption={shopOption}
                checkIfMerchItemsAreAvailable={checkIfMerchItemsAreAvailable}
                />
                {shopOption[0] === "merch" &&
                    <div className='shop__wrapper__item'>
                        {sortMerchItems(dataSortValue)}                         
                    </div>
                }
            </div>
        </div>
    );
};

export default Shop;