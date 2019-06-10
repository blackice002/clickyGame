import React from 'react';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import image from './image.json'
import "./App.css"

class App extends React.Component {

  state = {
    image,
    clickedimage: [],
    clicked: false,
    score: 0,
    highScore: 0
  }


shuffle = (array) => {
    for (let i = array.length-1; i >0 ; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i],array[j]] = [array[j],array[i]]
    }
    this.setState({
      image: array
    })
  }

makeShuffle(){
  this.setState({image:this.shuffle(image)})
}

  render() {
    return (
      <div className="App">
        <Header className="App-header"
          score={this.state.score}
          highScore={this.state.highScore}
        />
        {this.state.image.map(image=>{
          return <Card
          id={image.id}
          key={image.id}
          name={image.name}
          clicked={image.clicked}
          handleClick={this.imageClick}
          img={image.image}
          />
        })}

      </div>
    );
  }
}
// exporting app component

export default App;
