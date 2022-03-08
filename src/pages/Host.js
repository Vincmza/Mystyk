import React from 'react';
import hostBgImg from "../assets/background/bg-logo-2.png"
import { useNavigate } from "react-router-dom";

const Host = (props) => {
    let navigate = useNavigate()
    //IF USER GO TO THAT PAGE FROM URL MENU WILL NOT STAY IN RED TO THE PREVIOUS PAGE
    const setMenuToZero = ()=>{
        props.isPageClicked.shift()
        localStorage.clear()
    }
    setMenuToZero()
    //REDIRECTION TO NEWS PAGE ONCE LOGO IS CLICKED
    const redirect = ()=>{
        props.setIsPageClicked(["news"])
        localStorage.setItem("menu", "news")
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