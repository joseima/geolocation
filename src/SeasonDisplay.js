// import the react and rect doom libs

import React  from 'react';


const seasonConfig = {
	summer: {
		message: 'Its summer time, lets hit the beach',
		iconName: 'sun',
		iconColor: 'yellow'
	},
	winter: {
		message: 'Brrr, You are in winter',
		iconName: 'snowflake',
		iconColor: 'blue'
	}
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}

};


const SeasonDisplay = props => {
	
	const season = getSeason(props.lat, new Date().getMonth());
	const {message, iconName, iconColor} = seasonConfig[season];


	return (
			<div className='center'>
				<i className={`${iconName} icon massive ${iconColor} `} />
				<h2>Your Latitud is: {props.lat}<br/> and Longitud is: {props.long}</h2>
				<h3>{message}</h3>
				<i className={`${iconName} icon massive ${iconColor}`} />

			</div>
		);
};

export default SeasonDisplay;
