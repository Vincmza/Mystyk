import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai"



const Header = (props) => {
    //ALL PAGES
    const allPages = ["news","shows","bands","shop","contact"]
    //NAVIGATION
    let navigate = useNavigate()
    const redirect = (pageName)=>{
        const thePageToGo = allPages.find((elem)=>elem === pageName)
        props.isPageClicked.length > 0 && props.isPageClicked.shift()
        localStorage.clear()
        localStorage.setItem("menu", pageName)
        props.setIsPageClicked([pageName])
        navigate(`/${thePageToGo}`)
    }
    //BOOLEAN STATE TO DISPLAY NAV MENU
    const [isIconClicked, setIsIconClicked] = useState(false)
    //CHANGE STATE VALUE
    const handleNavLogo = ()=>{
        setIsIconClicked((pv)=>!pv)
    }
    return (
        <div className='headerContainer'>
            
            {isIconClicked === false ? 
            (<>
                <div className='menu'>
                    <div className='menu__nav-icon'>
                        <div className='menu__nav-icon__reactIcon' onClick={handleNavLogo}>
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
                
            </>)
            :
            (<>

                {/* <div className='nav-icon'>
                    <div className='nav-icon__reactIcon' onClick={handleNavLogo}>
                        <AiOutlineMenu/>
                    </div>
                </div> */}
                <div className='menu'>
                    <div className='menu__nav-icon'>
                        <div className='menu__nav-icon__reactIcon' onClick={handleNavLogo}>
                            <AiOutlineMenu/>
                        </div>
                    </div>
                    <div className='menu__logo'>
                        <picture>
                            <source media="(max-width:500px)" srcset="/assets/background/bg_low.png"/>         
                            <img 
                            className='menu__logo__file'
                            src="/assets/background/bg_medium.png"
                            alt="logo de mytyk prod"
                            />
                        </picture>
                    </div>
                </div>

                <nav>
                    <ul className='nav'>
                        {allPages.map((elem,index)=>(
                            <li style={{animationDelay :`${index*200}ms`}} key={elem} className='nav__title' onClick={()=>redirect(elem)}>
                                <div style={{color : props.isPageClicked[0] === elem && "red"}}>{elem}</div>
                            </li>))}
                    </ul>
                </nav>
            
            </>)}
                       
        </div>
    );
};

export default Header;