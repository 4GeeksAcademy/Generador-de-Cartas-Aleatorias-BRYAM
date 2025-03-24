import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


function getRandomCard() {
  const suits = ['♥', '♠', '♣', '♦'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];
  
  document.getElementById('top').textContent = suit;
  document.getElementById('value').textContent = value;
  document.getElementById('bottom').textContent = suit;
  
  document.getElementById('card').style.color = (suit === '♥' || suit === '♦') ? 'black' : 'darkgoldenrod';
} 


window.onload =()=> {
  getRandomCard();
  const newCardButton = document.getElementById("botonDeCarta")
  newCardButton.addEventListener("click",getRandomCard)
} 

