import React from 'react';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import images from './image.json'
import "./App.css"


class App extends React.Component {
  state = {
    images,
    score: 0,
    highScore:0,
    message:"clicked the image to play game"
}

//reset function for clicked item
resetGame = () => {
    this.setState({
        score: 0,
        images,
        message:"Try Again"
    })  
}

//handle fro non clicked item with update score
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

// handle for already clicked image
handleWrong = () => {
    if(this.state.highScore < this.state.score){
      this.setState({
        highScore:this.state.score,
        message: "You loose the game"
      });
    }
    setTimeout(()=> this.resetGame(),1000); 
      
};

// this handle the image propert clicked
handleClick = name => {
    let guessedCorrect = false;
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
   guessedCorrect ? this.handleCorrect(newimages) : this.handleWrong(newimages)

};

// changing the index of the image array  randomly
shuffleArray = images => {
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    return (images);   
};

// rander funtion for the app
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
