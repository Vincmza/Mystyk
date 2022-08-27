import React from 'react';
//ICONS
import * as net from "../../data/icons";

const Table = ({band,checkShows,goToBandPage}) => {
    return (
        <div>
            <div className="allShows__bandName-container">
                <h2
                    className="allShows__bandName-container--name"
                    onClick={() => goToBandPage(band.id, "bands")}
                >
                    {band.name}
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
                {checkShows(band.id).map((show) => (
                    <>
                        {show.bandId === band.id &&
                        show.isAvailable() === true ? (
                            <tr
                                key={show.id}
                                className="allShows__table__infos"
                            >
                                <td className="allShows__table__infos--date">
                                    {show.displayShowDate()}
                                </td>
                                <td className="allShows__table__infos--event">
                                    {show.event}
                                </td>
                                <td className="allShows__table__infos--where">
                                    {show.where}
                                </td>
                                <td className="allShows__table__infos--country">
                                    {show.country}
                                </td>
                                <td className="allShows__table__infos--moreDetails">
                                    {show.moreDetails !== "" && (
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            className="moreDetailsIcon"
                                            href={show.moreDetails}
                                        >
                                            {net.moreDetails}
                                        </a>
                                    )}
                                </td>
                            </tr>
                        ) : (
                            <></>
                        )}
                    </>
                ))}
            </table>
            
        </div>
    );
};

export default Table;