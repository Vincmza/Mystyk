import React, {useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai"

const Header = () => {
    //ALL PAGES
    const allPages = ["news","shows","bands","shop","contact"]
    //BOOLEAN STATE TO DISPLAY NAV MENU
    const [isIconClicked, setIsIconClicked] = useState(false)
    
    //WHERE USER CURRENTLY IS
    const location = useLocation()
    console.log(location.pathname.includes("bands"))
    //NAVIGATION
    let navigate = useNavigate()
    
    const redirect = (pageName)=>{
        const thePageToGo = allPages.find((elem)=>elem === pageName)
        navigate(`/${thePageToGo}`)
    }
    //CHANGE STATE VALUE TO DISPLAY OR HIDE NAVIGATION BAR
    const handleNavLogo = ()=>{
        setIsIconClicked((pv)=>!pv)
    }
    return (
        <div className='headerContainer'>
            <div className='menu'>
                <div className='menu__nav-icon'>
                    <div title="icon-header" className='menu__nav-icon__reactIcon' onClick={handleNavLogo}>
                        <AiOutlineMenu/>
                    </div>
                </div>
                <div className='menu__logo'>
                    <picture>
                        <source media="(max-width:500px)" srcSet="/assets/background/bg_low.png"/>         
                        <img 
                        className='menu__logo__file'
                        src="/assets/background/bg_medium.png"
                        alt="logo de mytyk prod"
                        />
                    </picture>
                </div>
            </div>
            {isIconClicked === true && 

                (<><nav>
                    <ul className='nav'>
                        {allPages.map((elem,index)=>(
                            <li 
                            style={{animationDelay :`${index*200}ms`}} 
                            key={elem} 
                            className='nav__title' 
                            onClick={()=>redirect(elem)}
                            >
                                {<div style={{color : location.pathname.includes(elem) && "red"}}>{elem}</div> }
                            </li>))}
                    </ul>
                </nav></>)
            }        
        </div>
    );
};

export default Header;