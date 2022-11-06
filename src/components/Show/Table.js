import React from 'react';
//ICONS
import * as net from "../../data/icons";
import { bands } from "../../data/bands";

const Table = ({goToBandPage}) => {
    // ARRAY TO STORE SHOWS OF ALL BANDS
    const storeShows = []
    bands.forEach(item=>{
        // IF SHOWS ARE STORED LOOP ON IT
        if(item.shows.length > 0){
            let shows = {
                band : item.name,
                band_id : item.id,
                showsOfTheBand : []
            }
            // CHECK TO STORE ALL GIGS TO COME
            item.shows.forEach(elem=>{
                if(elem.isAvailable() === true ){
                    shows.showsOfTheBand.push(elem)
                }
            })
            // IF THERE AREN'T GIGS ANYMORE TO STORE REMOVE BAND FROM THE OBJECT
            if(shows.showsOfTheBand.length > 0){
                storeShows.push(shows)
            }
        }
    })
    return (
        <div>
            {storeShows.length === 0 && <h2 style={{textAlign : "center"}}>Aucun événement pour l'instant</h2>}
            {storeShows.map((oneBand, index)=>(
                <li
                key={oneBand.band_id}
                className="allShows"
				style={{ animationDelay: `${index * 200}ms` }}
                >
                    <div className="allShows__bandName-container">
                        <h2
                            className="allShows__bandName-container--name"
                            onClick={() => goToBandPage(oneBand.band_id, "bands")}
                        >
                            {oneBand.band}
                        </h2>
                    </div>
                    <table className="allShows__table">
                        <tr className="allShows__table__titles">
                            <th className="allShows__table__titles--date">Date</th>
                            <th className="allShows__table__titles--event">Event</th>
                            <th className="allShows__table__titles--where">Where</th>
                            <th className="allShows__table__titles--country">
                                Country
                            </th>
                            <th className="allShows__table__titles--moreDetails">
                                More details
                            </th>
                        </tr>
                        {oneBand.showsOfTheBand.map(oneShow=>(
                            <tr
                            key={oneShow.id}
                            className="allShows__table__infos"
                            >
                                <td className="allShows__table__infos--date">
                                    {oneShow.displayShowDate()}
                                </td>
                                <td className="allShows__table__infos--event">
                                    {oneShow.event}
                                </td>
                                <td className="allShows__table__infos--where">
                                    {oneShow.where}
                                </td>
                                <td className="allShows__table__infos--country">
                                    {oneShow.country}
                                </td>
                                <td className="allShows__table__infos--moreDetails">
                                    {oneShow.moreDetails !== "" && (
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            className="moreDetailsIcon"
                                            href={oneShow.moreDetails}
                                        >
                                            {net.moreDetails}
                                        </a>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </table>
                </li>
            ))}
            
        </div>
    );
};

export default Table;