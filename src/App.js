import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
/*
1. Card component should display an image - just do one first
2. Write a bogus onclick function - click card, alert happens
3. App component has a score in it's state - refactor click event, score increases when card is clicked 
4. Try to display 12 cards - test click events hint you will use .map
4a. everytime you click, the cards are shuffled and re-rendered
5. how will you keep track of when a card is clicked twice? maybe you could push the card name to an
array in App state when the card is clicked? or put it in an object? check the array or object when card is clicked?
*/

function App() {
  const handleClick = () => {};

  const flipped = [];
  return (
    <div className="App">
      <h2>Try to remember where the cards are!</h2>
      <Card
        id={1}
        width={100}
        height={100}
        back={"/img/back.png"}
        front={"/img/react.png"}
        flipped={flipped.includes(1)}
        handleClick={() => handleClick(1)}
      />
      />
    </div>
  );
}

export default App;
