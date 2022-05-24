import React, { useState } from 'react';


//COMPONENTS
import Album from '../components/Album';
import Merch from '../components/Merch';
import FiltersMusicMerch from '../components/Shop/FiltersMusicMerch';
import SortShop from '../components/Shop/SortShop';

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
    //OPTIONS TO SORT SHOP
    const sortOptions = ["A-Z", "Release date", "Style"]
    //STATE TO STORE SORT CHOICE
    const [isSorted, setIsSorted] = useState("A-Z")
    //STYLE STATE
    const [isStyleChoosen, setIsStyleChoosen]=useState("")
    //FUNCTION TO DISPLAY SORT OPTIONS
    const displaySortOptions = ()=>{
        setIsSortButtonClicked((cv)=>!cv)
    }
    //SORT BY A-Z, RELEASE DATE AND STYLE
    const storeSort = (value)=>{
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
                    storeShopOption={storeShopOption}
                    options={options}
                    />
                    <SortShop
                    shopOption={shopOption}
                    displaySortOptions={displaySortOptions}
                    sortOptions={sortOptions}
                    isSortButtonClicked={isSortButtonClicked}
                    storeSort={storeSort}
                    isSorted={isSorted}
                    allStyles={allStyles}
                    whichStyle={whichStyle}
                    />
                </div>
                <div className='shop__wrapper__item'>
                    {sortShop(allReleases)}
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