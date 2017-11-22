import React, { Component } from 'react';
import Page from './containers/PageContainer'
import { BrowserRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return (
    <div>
    <BrowserRouter>
	<Page/>
	</BrowserRouter>
	</div>
    );
  }
}
export default App;

