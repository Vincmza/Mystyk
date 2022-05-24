import React from 'react';

const BandBio = ({bandFiltered}) => {
    return (
        <div>
            <div className='bio'>
                    <div className='bio__content'>
                        <h2 className='bio__content bio__content--title'>Biography</h2>
                        <div className='bio__content bio__content--text'>
                            {bandFiltered.biography}
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default BandBio;