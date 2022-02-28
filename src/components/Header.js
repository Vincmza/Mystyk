import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai"


const Header = () => {
    //All pages
    const allPages = ["news","shows","bands","shop","contact"]
    //Navigation
    let navigate = useNavigate()
    const redirect = (page)=>{
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