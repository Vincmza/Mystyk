import React from "react";
import { shows } from "../data/shows";
import { bands } from "../data/bands";
import * as net from "../data/icons";
import { useNavigate } from "react-router-dom";

const Shows = (props) => {
	let navigate = useNavigate();
	const goToBandPage = (bandId, pageName) => {
		props.isPageClicked.length > 0 && props.isPageClicked.shift();
		localStorage.clear();
		localStorage.setItem("menu", pageName);
		props.setIsPageClicked([pageName]);
		navigate(`/band/${bandId}`);
	};
	//GET ID JUST OF BANDS IN SHOWS ARRAY
	const getAllBandId = shows.reduce((acc, cv) => {
		acc.includes(cv.bandId) || acc.push(cv.bandId);
		return acc;
	}, []);
	//GET BANDS INFOS WITH THEIR ID
	const getBands = () => {
		const bandsShow = [];
		getAllBandId.forEach((elem) => {
			let oneBand = bands.filter((item) => item.id == elem)[0];
			bandsShow.push(oneBand);
		});
		return bandsShow;
	};
    //GET SHOWS AVAILABLE ONLY 
	const checkShows = () => {
		const areShowsOk = [];
		getAllBandId.forEach((element) => {
			let oneShow = shows.filter(
				(show) => show.bandId === element && show.isAvailable() === true
			)[0];
			oneShow !== undefined ? areShowsOk.push(oneShow) : <></>;
		});
		return areShowsOk;
	};
    console.log(checkShows())
	return (
		<div className="shows">
			<h1 className="showsIntro">Upcoming Shows</h1>
			<ul className="showsList">
				{getBands().map((band, index) => (
					<li
						key={band.id}
						className="allShows"
						style={{ animationDelay: `${index * 400}ms` }}
					>
						{checkShows().filter((elem) => elem.bandId === band.id).length != 0 && (
							<>
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
									{checkShows().map((show, index) => (
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
							</>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Shows;
