import React, {useState} from 'react';

const SortMusic = ({
    shopOption,  
    allRecords,
    sortMusic
}) => {
     //ALL STYLES AVAILABLE
     const allStyles = allRecords.reduce((acc,cv)=>{
        acc.includes(cv.style) || acc.push(cv.style)
        return acc
    },[])
     //VALUE TO HELP TO SORT THE RECORDS DISPLAYED IN THE COMPONENT
     const [dataSortValue, setDataSortValue] = useState("")
    //OPTIONS AVAILABLE IN ORDER TO MAKE INPUTS
    const sortAlbums = ["A-Z", "Release date", "Style"]
    //CHECK IF INPUT WITH VALUE SORT IS CLICKED
    const [isSortButtonClicked, setIsSortButtonClicked]=useState(false)
    //WHICH MUSIC STYLE USER CHOOSES
    const [isStyleChoosen, setIsStyleChoosen]=useState("")
    //FUNCTION TO UPDATE STATE THEREUPON
    const displaySortOptions = ()=>{
        setIsSortButtonClicked((cv)=>!cv)
    }
    // GET STYLE CHOOSEN AND CALL FUNCTION TO SORT MUSIC ACCORDING TO THAT VALUE
    const whichStyle = (style)=>{
        if(dataSortValue === "Style"){
            setIsStyleChoosen(style)
            sortMusic("Style", style)
        }
        else{
            console.log("Erreur : ", dataSortValue)
        }
    }
    const sortStore = (value)=>{
        if(shopOption[0] === "music"){
            setDataSortValue("")
            setDataSortValue(value)
            if(value !== "Style"){
                setIsStyleChoosen("")
                sortMusic(value)
            }
            setDataSortValue(value)
        }
    }
    return (
        <div className='shop__wrapper__options'>
            {shopOption[0] === "music" &&
                (<>
                    <div className='sort'>
                        <input 
                        type="button"
                        value="Sort"
                        className='sort__list'
                        onClick={displaySortOptions}
                        />
                        <div className='sort__list__options'>
                            {isSortButtonClicked === true && (<>
                                {sortAlbums.map((item, index)=>(
                                <input 
                                type="button" 
                                key={item}
                                value={item}
                                className={`sort__list__options__input`}
                                onClick={(e)=>sortStore(e.target.value)}
                                style={
                                    {
                                        animationDelay: `${index*150}ms`,
                                        backgroundColor: `${dataSortValue === item ? "rgb(117, 7, 7)" : "wheat"}`,
                                        color : `${dataSortValue === item ? "wheat" : "rgb(117, 7, 7)" }`
                                    }
                                }
                                />
                                ))}
                                <div className='sort__list__options__style'>
                                    {dataSortValue === "Style" && (<>
                                        {allStyles.map((style, index)=>(
                                        <input 
                                        type="button"
                                        key={style}
                                        value={style}
                                        className={`sort__list__options__style__input`}
                                        onClick={(e)=>whichStyle(e.target.value)}
                                        style={
                                            {
                                                animationDelay: `${index*150}ms`,
                                                backgroundColor: `${isStyleChoosen === style ? "rgb(117, 7, 7)" : "wheat"}`,
                                                color : `${isStyleChoosen === style ? "wheat" : "rgb(117, 7, 7)" }`
                                            }
                                        }
                                        />
                                        ))}
                                    </>)}
                                </div>
                            </>)}
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default SortMusic;