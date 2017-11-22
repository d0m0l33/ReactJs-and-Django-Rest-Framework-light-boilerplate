import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import NavBarComp from '../components/NavBar'
import JumbotronComp from '../components/Jumbotron'
import Home from './HomePage'


const Page =()=>(
	<page>
		<NavBarComp/>
		<JumbotronComp/>
		<Switch>
			<Route exact path ="/" component={Home}/>
		</Switch>
	</page>
);

export default Page
