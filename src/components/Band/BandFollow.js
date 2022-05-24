import React from 'react';

const BandFollow = ({socialLinks}) => {
    return (
        <div>
            <div className='follow'>
                    <ul className='follow__links'>
                        <h2 className='follow__title'>Follow</h2>
                        <div className='follow__container'>
                            {socialLinks()}
                        </div>
                    </ul>
                </div>
        </div>
    );
};

export default BandFollow;