import React  from 'react';
import ReactDOM  from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading'




class App extends React.Component {
		
	state = { lat : null, long : null, errorMessage:'' };

	componentDidMount () {
			window.navigator.geolocation.getCurrentPosition(
				position =>	this.setState({ lat : position.coords.latitude, long : position.coords.longitude}),
				err => this.setState({errorMessage: err.message})
			);
		}

	componentDidUpdate () {
		console.log('My component was just updated');
	}

	renderContent () {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}		
		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} long={this.state.long} />
		}
		return 		<Loading loadingMessage="Loading your location, Please accept request" />
	};

	render () {
		return ( <div>
			{this.renderContent()}
		</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.querySelector('#root')
);

