import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './components/Main.jsx';

class App extends React.Component {
	render() {
		return(<BrowserRouter>
			 <Route name="main" component={Main} path="/" />
		</BrowserRouter>)
	}
}

export default App;
