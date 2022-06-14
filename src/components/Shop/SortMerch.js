import React from 'react';

const SortMerch = ({shopOption, displaySortOptions, isSortButtonClicked,createInputsMerchSection,checkIfMerchItemsAreAvailable}) => {
    return (
        <div className='shop__wrapper__options'>
            {shopOption[0] === "merch" && checkIfMerchItemsAreAvailable() > 0 ?
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
                </>):(<></>)
            }
        </div>
    );
};

export default SortMerch;