import React from 'react';
//ICONS
import * as net from "../../data/icons";

const BandFollow = ({bandFiltered}) => {
    const socialLinks = ()=>{
        const links = bandFiltered.followLinks[0]
        const linksData = Object.entries(links)
        return linksData.map(socialMediaIcon=>
            socialMediaIcon[1] !== "" &&
            (<li key={socialMediaIcon} className="follow__container__oneIcon">
                <a 
                href={socialMediaIcon[1]} 
                target="_blank" 
                rel="noreferrer" 
                className={`follow__container__oneIcon--${socialMediaIcon[0]}`}>
                    {net[socialMediaIcon[0]]}
                </a>
            </li>))
    }
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