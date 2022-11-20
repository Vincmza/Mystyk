import React from 'react';

const BandPastMembers = ({bandFiltered}) => {
    //OLD MEMBERS FILTERED IN AN ARRAY
    const oldMembers = bandFiltered.lineUp.filter(elem=>elem.pastMember.isTrue === true)
    //DISPLAY PAST MEMBERS FUNCTION
    const displayPastMembers = ()=>{  
        if(oldMembers.length > 0){
            return (oldMembers.map(elem=>(
                <li key={elem} className='pastMembers__list__oldMember'>
                    <span>{elem.name} : </span>
                    <span>{elem.instrument.length > 1 ? (elem.instrument.join(", ")):(elem.instrument)}.</span>
                </li>
            )))
        }
    }
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