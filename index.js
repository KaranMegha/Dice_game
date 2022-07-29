
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomImage1 = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomImage2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);

var image1 = document.querySelectorAll("img")[1]
image1.setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2)
{
  var h1 = document.querySelector("h1")
  h1.innerHTML = "Player 1 Wins! 🚩";
}
else if(randomNumber1<randomNumber2){
  var h1 = document.querySelector("h1")
  h1.innerHTML = "Player 2 Wins! 🚩";
}
else if(randomNumber1==randomNumber2){
  var h1 = document.querySelector("h1")
  h1.innerHTML = "Draw! 🚩";
}
