import React from 'react';

const SortMerch = ({shopOption, displaySortOptions, isSortButtonClicked,createInputs}) => {
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
                            {isSortButtonClicked === true && (<>{createInputs()}</>)}
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default SortMerch;