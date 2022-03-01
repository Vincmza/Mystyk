import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai"


const Header = () => {
    //ALL PAGES
    const allPages = ["news","shows","bands","shop","contact"]
    //NAVIGATION
    let navigate = useNavigate()
    const redirect = (page)=>{
        const thePageToGo = allPages.find((elem)=>elem === page)
        navigate(`/${thePageToGo}`)
    }
    //BOOLEAN STATE TO DISPLAY NAV MENU
    const [isIconClicked, setIsIconClicked] = useState(false)
    //SET EITHER TRUE OR FALSE TO STATE THEREUPON
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
                        {allPages.map((elem,index)=>(
                            <li style={{animationDelay :`${index*200}ms`}} key={elem} className='nav__title' onClick={()=>redirect(elem)}>
                                {elem}
                            </li>))}
                    </ul>
                </nav>
            
            </>)}
                       
        </div>
    );
};

export default Header;