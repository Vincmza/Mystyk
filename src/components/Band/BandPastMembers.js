import React from 'react';

const BandPastMembers = ({oldMembers, displayPastMembers}) => {
    return (
        <div>
            <div className='pastMembers'>
                {oldMembers.length > 0 &&
                    <h3 className='pastMembers__title'>Past members</h3>
                }
                <ul className='pastMembers__list'>
                    {displayPastMembers()}
                </ul>
            </div>
        </div>
    );
};

export default BandPastMembers;