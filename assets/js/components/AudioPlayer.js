import React, { Component } from 'react';
import { Grid,Row, Col } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';
import Img from 'react-image';
import song1 from './music/gotFlow.mp3';
import img from './img/re2.png';
import img1 from './img/audio_place_holder_350x250.jpg';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const AudioComponent = (props) => (
  <Card>
    <CardHeader
      title={props.producer}
      subtitle="Toronto"
      avatar={img}
    />
    <CardMedia
    >
      <img src={img1} alt="" />
    </CardMedia>
    <CardTitle title={props.track} subtitle={props.genre} />
    <CardActions>
      <FlatButton label="Like" />
      <FlatButton label="Comment" />
      <FlatButton label="Share" />
    </CardActions>
  </Card>
);
export default AudioComponent


