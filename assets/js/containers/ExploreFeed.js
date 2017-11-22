import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid,Row, Col } from 'react-bootstrap';
import AudioComponent from '../components/AudioPlayer'
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const gridStyle={marginBottom:'30px'};
const gridElementStyle = {marginTop:'30px'};

const ExploreList = () =>(
  <MuiThemeProvider>
  <Grid>
    <Row className="show-grid">
		<Col xs={12} md={8} lg={4}>
		<h2> Top tracks </h2> 
		</Col>
    </Row>
	<TrackList url='/api/'/>
    <Row className="show-grid">
		<Col xs={12} md={8} lg={4}>
		<h2> Trending this month </h2> 
		</Col>
    </Row>
	<TrackList url='/api/'/>
    <Row className="show-grid">
		<Col xs={12} md={8} lg={4}>
		<h2> Top locations </h2> 
		</Col>
    </Row>
	<TrackList url='/api/'/>
  </Grid>
  </MuiThemeProvider>

);

class TrackList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    };
  }
  componentDidMount() {
    axios.get(this.props.url)
      .then(res => {
        const tracks = res.data;
        console.log(tracks);
        this.setState({ tracks });
      });
  }
  render() {
    return (
      <div>
      <Row className="show-grid" style={gridStyle}>
          {this.state.tracks.map(track =>
			<Col xs={12} md={8} lg={4} style={gridElementStyle}>
            <AudioComponent producer={track.producer} track={track.track} genre={track.genre}/>
            </Col>
          )}
      </Row>
      </div>
    );
  }
}

export default ExploreList
