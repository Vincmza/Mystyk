import React from 'react';

const BandLineUp = ({bandFiltered}) => {
    return (
        <div>
            <div className='lineUp'>
                <h3 className='lineUp__title'>Current line up</h3>
                <ul className='lineUp__list'>
                    {bandFiltered.lineUp.map(elem=>(
                        <li key={elem.name}>
                            {elem.pastMember.isTrue === false ?                               
                            (<>
                            <div className='lineUp__list__card'>
                                <div className='lineUp__list__card--member'>
                                    {elem.name} :
                                </div>
                                <ul className='lineUp__list__card--role'>
                                    {elem.instrument.map((item,index)=>(
                                        index !== elem.instrument.length-1 ?
                                        <li className='role' key={item} style={{paddingLeft:"10px"}}>
                                            {item},
                                        </li> : 
                                        <li className='role' key={item} style={{paddingLeft:"10px"}}>
                                            {item}.
                                        </li>)
                                    )}
                                </ul>
                            </div>
                            </>) 
                            : 
                            (<>
                            </>)}
                    </li>))}
                </ul>
            </div>
        </div>
    );
};

export default BandLineUp;