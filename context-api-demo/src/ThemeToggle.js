import React, { Component } from 'react';
import { ThemeContext } from './context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

class ThemeToggle extends Component {
    static contextType = ThemeContext
    render() {
        const { toggleTheme } = this.context
        return (<button onClick={toggleTheme} className='btn btn-dark text-white'>Toggle the theme</button>)
    }
}
export default ThemeToggle;
