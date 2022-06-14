import React, { useState } from 'react';

//COMPONENTS
import Album from '../components/Album';
import Merch from '../components/Merch';
import FiltersMusicMerch from '../components/Shop/FiltersMusicMerch';
import SortMusic from '../components/Shop/SortMusic';
import SortMerch from '../components/Shop/SortMerch';

const Shop = ({bands}) => {

    //// ***** SHOP DIVIDED IN 2 SECTIONS : MUSIC AND MERCH ***** \\\\

    // *** COMMON STATES *** \\

    //HIDE OR DISPLAY FILTERS
    const [showFilters, setShowFilters]=useState(false)
    //STATE TO STORE EITHER MUSIC OR MERCH OPTION
    const [shopOption, setShopOption] = useState([])
    //STORE ITEM DESCRIPTION WHEN USER CLICKS ON ARROW
    const [description, setDescription]=useState([])  
    //STATE TO STORE BOTH MUSIC AND MERCH SECTION
    const [isSorted, setIsSorted] = useState("")
    //SORT BUTTON STATE
    const [isSortButtonClicked, setIsSortButtonClicked]=useState(false)

    // *** COMMON FUNCTIONS *** \\

    //FUNCTION THAT STORES VALUE OF THE INPUT
    //SO SHOP CAN SORTED ACCORDING TO THAT VALUE
    const sortStore = (value)=>{
        setIsSorted("")
        setIsSorted(value)
        if(value !== "Style"){
            setIsStyleChoosen("")
        }
    }

    /// *** COMMON DATA *** \\\

    //OPTIONS TO EITHER DISPLAY MUSIC OR MERCH
    const options = ["music", "merch"]

    //WORKING ON BOOLEAN STATE HIDING OR DISPLAYING BUTTON
    const displayFilters = ()=>{
        setShowFilters((e)=>(!e))
    }
     //FUNCTION TO DISPLAY OPTIONS TO SORT CURRENT SECTION
     const displaySortOptions = ()=>{
        setIsSortButtonClicked((cv)=>!cv)
    }

    // *** MUSIC SECTION *** \\

    // --- MUSIC STATES

    //OPTIONS TO SORT ALBUMS
    const sortAlbums = ["A-Z", "Release date", "Style"]  
    //WHICH MUSIC STYLE USER CHOOSES
    const [isStyleChoosen, setIsStyleChoosen]=useState("")

    // --- MUSIC DATA

    //ALL RELEASES FROM ALL BANDS
    const allReleases = bands.map(item => item.releases[0])
    //ALL STYLES AVAILABLE
    const allStyles = allReleases.reduce((acc,cv)=>{
        acc.includes(cv.style) || acc.push(cv.style)
        return acc
    },[])

    // --- MUSIC FUNCTIONS

    //IF STYLE INPUT PREVIOUSLY CLICKED
    //USER CAN CHOOSE WHICH STYLE TO SORT SHOP BY
    const whichStyle = (style)=>{
        setIsStyleChoosen(style)
    }
    //RETURN DATA ACCORDING WHAT USER
    //CHOSE TO SORT SHOP BY
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

    // *** MERCH SECTION *** \\

    // --- MERCH DATA

    //ALL MERCH ITEMS FROM ALL BANDS
    const allMerch = bands.map(item => item.merch[0]).filter(elem => elem !== undefined)

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
    //RETURN MERCH ITEMS SORTED ACCORDING USER CHOICE
    const sortMerchItems = (format)=>{
        console.log(format)
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
                    />
                    <SortMusic
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
                {shopOption[0] === "merch" &&
                    <div className='shop__wrapper__item'>
                        {sortMerchItems(isSorted)}                         
                    </div>
                }
            </div>
        </div>
    );
};

export default Shop;