import React from 'react';
import hostBgImg from "../assets/background/bg-logo-2.png"
import { useNavigate } from "react-router-dom";

const Host = (props) => {
    let navigate = useNavigate()
    const redirect = ()=>{
        props.setIsPageClicked(["news"])
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