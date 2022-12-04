import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/Host/LoadingSpinner"

const Host = (props) => {
    const url = '/assets/background/mystic_intro.mp4'

    const [hasVideoFinished, setHasVideoFinished]=useState(false)
    const getBackBackgroundImage = ()=>{
        setHasVideoFinished((value=>!value))
    }

    const [hasVideoStarted, setHasVideoStarted]=useState(false)
    const checkIfVideoHasStarted = ()=>{
        setHasVideoStarted((value=>!value))
    }

    let navigate = useNavigate()
    //REDIRECTION TO NEWS PAGE ONCE LOGO IS CLICKED
    const redirect = ()=>{
        
        navigate("/news")
        getBackBackgroundImage()
    }
    
    return (
        <div className="host">
            <div className="host__bgImgCont">
            
                <div className="host__bgImgCont__video">
                    {(hasVideoStarted === false && hasVideoFinished === false) && <LoadingSpinner/>}
                    {hasVideoFinished === false && 
                        <ReactPlayer
                        url={url}
                        controls={true}
                        volume={0.5}
                        muted={true}
                        width="400"
                        playing={true}
                        onEnded={getBackBackgroundImage}
                        onError={getBackBackgroundImage}
                        onReady={checkIfVideoHasStarted}
                        style={{visibility : `${hasVideoStarted === false ? "hidden" : "visible"}`}}
                        />
                    }
                </div>
                {hasVideoFinished === true && 
                    <img 
                    onClick={()=>redirect()} 
                    className="host__bgImgCont__video" 
                    src="/assets/background/bg_high.png" 
                    alt="logo du label"
                    />
                }
            </div>
        </div>
    );
};

export default Host;