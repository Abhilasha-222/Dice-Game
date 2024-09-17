var randomNumber1 = Math.floor(Math.random() * 6)+ 1; 

var randomNumner2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumner2+".png");

if(randomNumber1 === randomNumner2){
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
}else if(randomNumber1 > randomNumner2){
    document.getElementsByTagName("h1")[0].innerHTML = " 🚩Player 1 wins !" ;
}
else {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 wins!  🚩";
}