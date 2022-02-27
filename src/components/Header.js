import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai"


const Header = () => {
    //Navigation
    let navigate = useNavigate()
    const redirect = (page)=>{
        const allPages = ["news","shows","bands","shop","contact"]
        const thePageToGo = allPages.find((elem)=>elem === page)
        navigate(`/${thePageToGo}`)
    }
    //States
    const [isIconClicked, setIsIconClicked] = useState(false)
    //Set either true or false to thereupon state
    const handleNavLogo = ()=>{
        setIsIconClicked((pv)=>!pv)
    }
    return (
        <div>
            {isIconClicked === false ? 
            (<>
                <div className='nav-icon'>
                    <div className='nav-icon__reactIcon' onClick={handleNavLogo}>
                        <AiOutlineMenu/>
                    </div>
                </div>
            </>)
            :
            (<>

                <div className='nav-icon'>
                    <div className='nav-icon__reactIcon' onClick={handleNavLogo}>
                        <AiOutlineMenu/>
                    </div>
                </div>

                <nav>
                    <ul className='nav'>
                        <li className='nav__title'>
                            <h1 onClick={()=>redirect("news")}>News</h1>
                        </li>
                        <li className='nav__title'>
                            <h1 onClick={()=>redirect("shows")}>Shows</h1>
                        </li>
                        <li className='nav__title'>
                            <h1 onClick={()=>redirect("bands")}>Bands</h1>
                        </li>
                        <li className='nav__title'>
                            <h1 onClick={()=>redirect("shop")}>Shop</h1>
                        </li>
                        <li className='nav__title'>
                            <h1 onClick={()=>redirect("contact")}>Contact</h1>
                        </li>
                    </ul>
                </nav>
            
            </>)}
                       
        </div>
    );
};

export default Header;