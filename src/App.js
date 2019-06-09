import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';

class  App extends React.Component {

  state = {
  options:[],
  guessed: null,
  score: 0,
  highScore: 0 
  }
  render(){
    return (
      <div className="App">
        <Header className="App-header">
        </Header>
      </div>
    );
  }
  }
// exporting app component

export default App;
