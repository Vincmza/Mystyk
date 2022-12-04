import React from 'react';

const Error = () => {
    const returnImg = ()=>{
        return "assets/background/not_found.jpg"
    }
    return (
        <div className='error'>
            <div className='error__text'>
                <p>Content not found. Use the navigation menu thereupon to go anywhere</p>
            </div>
            <div className='error__container'>
                <img className='error-img' src={returnImg()} alt="Contenu indisponible"/>
            </div>
        </div>
    );
};

export default Error;