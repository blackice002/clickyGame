import React from 'react';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import images from './image.json'
import "./App.css"
// import imageBlock from './image.json'

class App extends React.Component {
  state = {
    images,
    score: 0,
    highScore:0,
    message:"clicked the image to play game"
}

resetGame = () => {
    this.setState({
        score: 0,
        images,
        // message: "try again"
    })      
}

handleCorrect = newimages => {
    if (this.state.score === 12) {
        this.resetGame();
        console.log("You won!");
        this.setState({
            message: "You win !"
        })
    }
    this.setState({
        images: this.shuffleArray(newimages), 
        score: this.state.score +1,

    });
    
};

handleWrong = () => {
    if(this.state.highScore < this.state.score){
      this.setState({
        highScore:this.state.score,
        message: "you loose the game"
      })
    }
    this.resetGame();
    setTimeout(()=>1000)
    
};

handleClick = name => {
    let guessedCorrect = false;
    let message=this.state.massage
    const newimages = this.state.images.map(image => {
       const newPic = {...image};
       if (newPic.name === name) {
           if(!newPic.clicked){
               console.log("Already guessed------------");
               newPic.clicked = true;
               guessedCorrect = true;
           }
       }
       return newPic;
   })       
   console.log("GUESSED CORRECT: ", guessedCorrect)
   guessedCorrect ? this.handleCorrect(newimages,message) : this.handleWrong(newimages,message)
   
};

shuffleArray = images => {
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    return (images);   
};

render() {
    return(
        <div className="App">
            <Header score={this.state.score}
              highScore={this.state.highScore}
              message={this.state.message}
            />
                {this.state.images.map(image => {
                        return (<Card 
                        name={image.name}
                        key={image.name} 
                        handleClick={this.handleClick}
                        src={image.image} 
                        alt={image.name}  
                    />)
                    })}
                </div>   
    );
}
};
// exporting app component

export default App;
