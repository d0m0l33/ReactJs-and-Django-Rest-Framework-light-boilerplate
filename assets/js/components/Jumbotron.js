import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron,Button} from 'react-bootstrap';


const innerBlock = {
		textAlign:'center'
};

const JumbotronComp = () =>(
  <Jumbotron>
  <div style={innerBlock}>
    <h1>Trending Tracks</h1>
    [LargeSearchBar]
  </div>
  </Jumbotron>
);

export default JumbotronComp
