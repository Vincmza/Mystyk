import React, { useState } from 'react';

//COMPONENTS
import Album from '../components/Album';
import Merch from '../components/Merch';
import FiltersMusicMerch from '../components/Shop/FiltersMusicMerch';
import SortShop from '../components/Shop/SortMusic';
import SortMerch from '../components/Shop/SortMerch';

const Shop = ({bands}) => {
    // --- OPTIONS BETWEEN MUSIC OR MERCH

    //HIDE OR DISPLAY FILTERS
    const [showFilters, setShowFilters]=useState(false)
    const displayFilters = ()=>{
        setShowFilters((e)=>(!e))
    }
    //OPTIONS TO EITHER DISPLAY MUSIC OR MERCH
    const options = ["music", "merch"]
    //STATE TO STORE EITHER MUSIC OR MERCH OPTION
    const [shopOption, setShopOption] = useState([])
    //STORE ITEM DESCRIPTION WHEN USER CLICKS ON ARROW
    const [description, setDescription]=useState([])
    //IF NO ITEM IN MERCH ARRAY RETURN MESSAGE TO INFORM USER
    const CheckMerchLength = ()=>{
        let count = 0
        bands.forEach(element => {
            let merch = element.merch.length
            if(merch > 0) count +=1
        });
        if(count === 0 && shopOption[0] === "merch"){
            return <h1 style={{textAlign : "center", marginTop : "15px"}}>Aucun article disponible actuellement</h1>
        }
    }
    //ALL MERCH ITEMS FROM ALL BANDS
    const allMerch = bands.map(item => item.merch[0]).filter(elem => elem !== undefined)

    //MERCH ITEMS FORMAT GATHERED
    let allMerchFormat = allMerch.reduce((acc,cv)=>{
        acc.includes(cv.format) || acc.push(cv.format)
        return acc
    },[])
    
    const allFormat = [...allMerchFormat]
    allFormat.unshift("all")
    
    const sortMerchItems = (format)=>{
        if(format !== "all"){
            return allMerch.map((item, index)=>(
                item.format === format &&
                <Merch 
                key={item.id} 
                elem={bands.filter(elem => elem.id === item.bandId)}
                item={item}
                index={index}
                description={description} 
                setDescription={setDescription}
                />
            ))
        }
        if(format === "all"){
            return allMerch.map((item,index)=>(
                <Merch 
                key={item.id} 
                elem={bands.filter(elem => elem.id === item.bandId)}
                item={item}
                index={index}
                description={description} 
                setDescription={setDescription}
                />
            ))
        }
    }

    //CREATE INPUTS TO SORT MERCH ITEMS BY FORMAT
    const createInputs = ()=>{
       return shopOption[0] === "merch" && allFormat.map((item,index)=>(
       <input 
       type="button" 
       key={item} 
       value={item}
       className={`sort__list__options__input`}
       style={
            {
            animationDelay: `${index*150}ms`,
            backgroundColor: `${isSorted === item ? "rgb(117, 7, 7)" : "wheat"}`,
            color : `${isSorted === item ? "wheat" : "rgb(117, 7, 7)" }`
            }
        }
        onClick={(e)=>sortStore(e.target.value)}
       />))
    }
    

    // --- SORT OPTIONS WHEN MUSIC OPTION IS CHOOSEN

    //ALL RELEASES FROM ALL BANDS
    const allReleases = bands.map(item => item.releases[0])
    //ALL STYLES AVAILABLE
    const allStyles = allReleases.reduce((acc,cv)=>{
        acc.includes(cv.style) || acc.push(cv.style)
        return acc
    },[])
    //SORT BUTTON STATE
    const [isSortButtonClicked, setIsSortButtonClicked]=useState(false)
    //FUNCTION TO DISPLAY SORT OPTIONS
    const displaySortOptions = ()=>{
        setIsSortButtonClicked((cv)=>!cv)
    }
    //OPTIONS TO SORT ALBUMS
    const sortAlbums = ["A-Z", "Release date", "Style"]
    //STATE TO STORE SORT CHOICE
    const [isSorted, setIsSorted] = useState("A-Z")
    //MUSIC STYLE STATE
    const [isStyleChoosen, setIsStyleChoosen]=useState("")
    
    //SORT BY A-Z, RELEASE DATE AND STYLE
    const sortStore = (value)=>{
        setIsSorted("")
        setIsSorted(value)
        if(value !== "Style"){
            setIsStyleChoosen("")
        }
    }
    //IF STYLE PREVIOUSLY CLICKED PRECISE STYLE TO SORT SHOP
    const whichStyle = (style)=>{
        setIsStyleChoosen(style)
    }
    function sortShop(albums){
        if(isSorted === "Release date"){
            return albums.sort((a,b)=>{
                return new Date(a.releaseDate) - new Date(b.releaseDate)
            }).map((item,index)=>(<Album
                sortedByDate={true}
                index={index}
                key={item.id}
                item={item}
                elem={bands.filter(elem=>elem.id === item.bandId)}
                description={description}
                setDescription={setDescription}
                />))
        }
        if(isSorted === "A-Z"){
            return albums.map((item,index)=>(
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
        }
        if(isSorted === "Style" && isStyleChoosen !== ""){
            const albumsSortedByStyle = albums.filter(album => album.style === isStyleChoosen)
            return albumsSortedByStyle.map((item,index)=>(
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
        }
    }   
    return (
        <div className='shop'>
            <h1 className='shopIntro'>Shop</h1>
            <div className='shop__wrapper'>
                <div className='shop__wrapper__options'>
                    <FiltersMusicMerch 
                    displayFilters={displayFilters}
                    showFilters={showFilters}
                    shopOption={shopOption}
                    setShopOption={setShopOption}
                    setDescription={setDescription}
                    setIsStyleChoosen={setIsStyleChoosen}
                    options={options}
                    setIsSorted={setIsSorted}
                    sortAlbums={sortAlbums}
                    />
                    <SortShop
                    shopOption={shopOption}
                    displaySortOptions={displaySortOptions}
                    sortAlbums={sortAlbums}
                    isSortButtonClicked={isSortButtonClicked}
                    sortStore={sortStore}
                    isSorted={isSorted}
                    allStyles={allStyles}
                    whichStyle={whichStyle}
                    isStyleChoosen={isStyleChoosen}
                    />
                </div>
                {shopOption[0] === "music" && 
                    <div className='shop__wrapper__item'>
                    {sortShop(allReleases)}
                    </div>
                }
                {CheckMerchLength()}
                <SortMerch
                createInputs={createInputs}
                shopOption={shopOption}
                displaySortOptions={displaySortOptions}
                isSortButtonClicked={isSortButtonClicked}
                />
                <div className='shop__wrapper__item'>
                    {sortMerchItems(isSorted)}                         
                </div>
                
            </div>
        </div>
    );
};

export default Shop;