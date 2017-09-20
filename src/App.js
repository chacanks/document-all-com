import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainLayout from './view/layout/MainLayout';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>  
        <MainLayout />
      </MuiThemeProvider>
    );
  }
}

export default App;
