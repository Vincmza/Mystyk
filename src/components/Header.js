import React from 'react';
import { useNavigate } from "react-router-dom";


const Header = () => {
    let navigate = useNavigate()
    const redirect = (page)=>{
        const allPages = ["news","bands","shop","contact"]
        const thePageToGo = allPages.find((elem)=>elem === page)
        navigate(`/${thePageToGo}`)
    }
    return (
        <div>
            <nav>
                <ul className='nav'>
                    <li className='nav__title'>
                        <h1 onClick={()=>redirect("news")}>News</h1>
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
        </div>
    );
};

export default Header;