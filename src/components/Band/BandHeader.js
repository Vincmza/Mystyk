import React from 'react';

const BandHeader = ({bandFiltered}) => {
    return (
        <div>
            <div className='band__header'>
                <picture>
                    <source media="(max-width: 800px)" srcSet={bandFiltered.banner.bannerMedium}/>
                    <source media="(max-width: 500px)" srcSet={bandFiltered.banner.bannerLow}/>                               
                        <img 
                        className='band__header__banner' 
                        src={bandFiltered.banner.bannerHigh} 
                        alt={`logo du groupe ${bandFiltered.name}`}
                        />
                </picture>
                <h1 className='band__name'>{bandFiltered.name}</h1>
                <div className='band__style'>
                    <span className='band__style'>Style général : 
                        <span className='band__style--main'>{bandFiltered.style}.</span>
                    </span>
                    <span className='band__style'>Sous-genre : 
                        <span className='band__style--sub'>{bandFiltered.subStyle}.</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BandHeader;