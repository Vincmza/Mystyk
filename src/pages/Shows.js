import React from 'react';
import { shows } from '../data/shows';
import * as net from "../data/icons"
import { useNavigate  } from 'react-router-dom';


const Shows = (props) => {
    let navigate = useNavigate()
    const goToBandPage = (bandId, pageName)=>{
        props.isPageClicked.length > 0 && props.isPageClicked.shift()
        localStorage.clear()
        localStorage.setItem("menu", pageName)
        props.setIsPageClicked([pageName])
        navigate(`/band/${bandId}`)
    }
    return (
        <div className='shows'>
            <h1 className='showsIntro'>Upcoming Shows</h1>
            <ul className='showsList'>
                {shows.map((item,index)=>(
                    <li className='allShows' key={item[index].id} style={{animationDelay : `${index*400}ms`}}>
                            <div className='allShows__bandName-container'>
                                <h2 className='allShows__bandName-container--name' onClick={()=>goToBandPage(item[index].bandId, "bands")}>
                                    {item[index].bandName()}
                                </h2>
                            </div>
                        <table className='allShows__table'>
                            <tr className='allShows__table__titles'>
                                <th className='allShows__table__titles--date'>Date</th>
                                <th className='allShows__table__titles--event'>Event</th>
                                <th className='allShows__table__titles--where'>Where</th>
                                <th className='allShows__table__titles--country'>Country</th>
                                <th className='allShows__table__titles--moreDetails'>More details</th>
                            </tr>                           
                            {item.map((elem)=>(
                                elem.isAvailable() === true &&
                                <tr key={elem.id} className="allShows__table__infos">
                                    <td className='allShows__table__infos--date' >
                                        {elem.displayShowDate()}
                                    </td>
                                    <td className='allShows__table__infos--event' >
                                        {elem.event}
                                    </td>
                                    <td className='allShows__table__infos--where' >
                                        {elem.where}
                                    </td>
                                    <td className='allShows__table__infos--country'>
                                        {elem.country}
                                    </td>
                                    <td className='allShows__table__infos--moreDetails'>
                                        {elem.moreDetails !== "" &&
                                            <a 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className='moreDetailsIcon' 
                                            href={elem.moreDetails}
                                            >
                                                {net.moreDetails}
                                            </a>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Shows;