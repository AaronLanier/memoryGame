import React, { Component } from "react";
import FoodCard from "./components/FoodCard";
import Wrapper from "./components/Wrapper";
import Banner from "./components/Banner";
import barFoods from "./barFoods.json";

class App extends Component {

  state = {
    barFoods,
    score: 0,
    highscore: 0
  };


  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.barFoods.forEach(barFood => {
      barFood.count = 0;
    });
    alert(`You Lose! \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.barFoods.find((o, i) => {
      if (o.id === id) {
        if(barFoods[i].count === 0){
          barFoods[i].count = barFoods[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.barFoods.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  render() {
    return (
      <Wrapper>
        <Banner score={this.state.score} highscore={this.state.highscore}>Bar Food Memory Game</Banner>
        {this.state.barFoods.map(barFood => (
          <FoodCard
            clickCount={this.clickCount}
            id={barFood.id}
            key={barFood.id}
            image={barFood.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;