// import the react and rect doom libs

import React  from 'react';



const Loading = (props) => {
	
	return (
			 <div className="ui active dimmer">
    			<div className="ui big text loader"><h2>{props.loadingMessage}</h2>
    			</div>
  			</div>
		);
};

Loading.defaultProps = {

	loadingMessage: 'Loading your Position...'
};

export default Loading;
