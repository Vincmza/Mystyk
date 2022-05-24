import React from 'react';

const SortShop = ({
    shopOption, 
    displaySortOptions, 
    sortOptions, 
    isSortButtonClicked,
    storeSort,
    isSorted,
    allStyles,
    whichStyle,
    isStyleChoosen
}) => {
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
                                {sortOptions.map((item, index)=>(
                                <input 
                                type="button" 
                                key={item}
                                value={item}
                                className={`sort__list__options__input`}
                                onClick={(e)=>storeSort(e.target.value)}
                                style={
                                    {
                                        animationDelay: `${index*150}ms`,
                                        backgroundColor: `${isSorted === item ? "rgb(117, 7, 7)" : "wheat"}`,
                                        color : `${isSorted === item ? "wheat" : "rgb(117, 7, 7)" }`
                                    }
                                }
                                />
                                ))}
                                <div className='sort__list__options__style'>
                                    {isSorted === "Style" && (<>
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

export default SortShop;