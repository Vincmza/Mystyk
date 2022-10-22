import React, {useState} from 'react';

const SortMerch = ({
    shopOption, 
    sortStore,
    merchSortValue,
    allMerch 
    }) => {
    //CHECK IF INPUT WITH VALUE SORT IS CLICKED
    const [isSortButtonClicked, setIsSortButtonClicked]=useState(false)
    const displaySortOptions = ()=>{
        setIsSortButtonClicked((cv)=>!cv)
    }
    //ALL DIFFERENT FORMAT OF MERCH
    let allMerchFormat = allMerch.reduce((acc,cv)=>{
        acc.includes(cv.format) || acc.push(cv.format)
        return acc
    },[])
    const createInputsMerchSection = ()=>{
        allMerchFormat.unshift("All")
        return shopOption[0] === "merch" && allMerchFormat.map((item,index)=>(
            <input 
            type="button" 
            key={item} 
            value={item}
            className={`sort__list__options__input`}
            style={
                    {
                    animationDelay: `${index*150}ms`,
                    backgroundColor: `${merchSortValue === item ? "rgb(117, 7, 7)" : "wheat"}`,
                    color : `${merchSortValue === item ? "wheat" : "rgb(117, 7, 7)" }`
                    }
                }
                onClick={(e)=>sortStore(e.target.value)}
            />))
    }
    return (
        <div className='shop__wrapper__options'>
            {shopOption[0] === "merch" && 
                (<>
                    <div className='sort'>
                        <input 
                        type="button"
                        value="Sort"
                        className='sort__list'
                        onClick={displaySortOptions}
                        />
                        <div className='sort__list__options'>
                            {isSortButtonClicked === true && (<>{createInputsMerchSection()}</>)}
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default SortMerch;