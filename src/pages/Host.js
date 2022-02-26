import React from 'react';
import hostBgImg from "../assets/background/bg-logo-2.png"
import { useNavigate } from "react-router-dom";

const Host = () => {
    let navigate = useNavigate()
    const redirect = ()=>{
        navigate("/news")
    }

    return (
        <div className="host">
            <div className="host__bgImgCont">
                <img onClick={()=>redirect()} className="host-bg-img" src={hostBgImg} alt="logo du label"/>
            </div>
        </div>
    );
};

export default Host;