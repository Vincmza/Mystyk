import React from "react";
//DATA
import { shows } from "../data/shows";
import { bands } from "../data/bands";
//USENAVIGATE
import { useNavigate } from "react-router-dom";
//COMPONENTS
import Table from "../components/Show/Table";

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
			let oneBand = bands.filter((item) => item.id === elem)[0];
			bandsShow.push(oneBand);
		});
		return bandsShow;
	};
	const everyShows = getAllBandId.map(id=> shows.filter(item=> item.bandId === id))
	//SORT SHOWS BY BAND 
	const checkShows = (idNb) => {
		const data = []
		for(let i = 0; i<everyShows.length; i++){
			let k = everyShows[i].filter(item=>item.bandId === idNb)
			k !== undefined && data.push(...k)
		}
		return data
	};
	return (
		<div className="shows">
			<h1 className="showsIntro">Upcoming Shows</h1>
			<ul className="showsList">
				{getBands().map((band, index) => (
					<li
						key={band.id}
						className="allShows"
						style={{ animationDelay: `${index * 200}ms` }}
					>
						{checkShows(band.id)
						.findIndex(object=>object.bandId === band.id && object.isAvailable() === true) !== -1 &&(
							<>
								<Table
								band={band}
								checkShows={checkShows}
								goToBandPage={goToBandPage}
								/>
							</>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Shows;
