import React from "react";
//USENAVIGATE
import { useNavigate } from "react-router-dom";
//COMPONENTS
import Table from "../components/Show/Table";

const Shows = () => {
	let navigate = useNavigate();
	const goToBandPage = (bandId) => {
		navigate(`/bands/${bandId}`);
	};
	
	return (
		<div className="shows">
			<h1 className="showsIntro">Upcoming Shows</h1>
			<ul className="showsList">	
				<Table
				goToBandPage={goToBandPage}
				/>
			</ul>
		</div>
	);
};

export default Shows;
