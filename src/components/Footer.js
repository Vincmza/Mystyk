import React from 'react';
import * as net from "../data/icons"
import seasonLogo from "../assets/season_of_mist/season-of-mist_logo.png"

const Footer = () => {
    const socialNeworkLinks={
        facebook : "https://www.facebook.com/mystykprod/", 
        instagram : "https://www.instagram.com/mystyk_prod/"
    }
    const takeLinksToArray = Object.entries(socialNeworkLinks)
    // console.log(Object.entries(socialNeworkLinks))
    return (
        <div className='footer'>
            <div className='footWrapper'>
                <div className='footWrapper__mystyk'>
                    <h1 className='footWrapper__mystyk__follow'>
                        Follow Mystyk Prod
                    </h1>
                    <ul className='footWrapper__mystyk__icons'>
                        {takeLinksToArray.map((elem)=>
                            (<li key={elem} className={`footWrapper__mystyk__icons--${elem[0]}`}>
                                <a href={elem[1]} target="_blank" rel="noreferrer">
                                    {net[elem[0]]}
                                </a>
                            </li>))}
                    </ul>
                </div>
                <div className='footWrapper__season'>
                    <h2 className='footWrapper__season__thanks'>
                        Thanks to our partner
                    </h2>
                    <div className='footWrapper__season__logoContainer'>
                        <a title='go to season of mist website' href='https://www.season-of-mist.com/' target="_blank" rel="noreferrer">
                            <img src={seasonLogo} alt="logo du distributeur season of mist"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='footWrapper__nekros'>website powered by Nerkos, more infos at : vincent.mzapro@outlook.fr</div>
        </div>
    );
};

export default Footer;