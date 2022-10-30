import React from "react";
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
