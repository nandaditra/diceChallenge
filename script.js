/*first variabel*/
var randomNumber1 = [1,2,3,4,5,6];

var indexRandomNumber1 = Math.floor((Math.random(randomNumber1.length)*10)%6);
var searchRNumber1 = randomNumber1[indexRandomNumber1];
var input1= searchRNumber1;

/*Second Variabel */

var randomNumber2 = [1,2,3,4,5,6];

var indexRandomNumber2 = Math.floor((Math.random(randomNumber2.length)*10)%6);
var searchRNumber2 = randomNumber2[indexRandomNumber2];
var input2= searchRNumber2;

/*Its has been finished*/
function checkStatus(input1,input2) {
    var changeTitle = document.querySelector("div h1");
    if(input1===input2) {
      changeTitle.innerHTML = "Draw!";
    } else if (input1 > input2){
      changeTitle.innerHTML = "💥Player 1 Wins!";
    } else if (input1 < input2){
      changeTitle.innerHTML = "Player 2 Wins!💥";
    }
}


function changeImage1(input1) {
    if (input1 === 1) {
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice1.png");
    } else if (input1 === 2) {
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice2.png");
    } else if (input1 === 3) {
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice3.png");
    } else if (input1 === 4) {
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice4.png");
    } else if (input1 === 5) {
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice5.png");
    } else if (input1 === 6) {
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice2.png");
    } 
}

/* Second Variabel*/

function changeImage2(input2) {
    if (input2 === 1) {
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice1.png");
    } else if (input2 === 2) {
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice2.png");
    } else if (input2 === 3) {
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice3.png");
    } else if (input2 === 4) {
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice4.png");
    } else if (input2 === 5) {
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice5.png");
    } else if (input2 === 6) {
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice2.png");
    } 
}

changeImage1(input1);
changeImage2(input2);
checkStatus(input1,input2);
