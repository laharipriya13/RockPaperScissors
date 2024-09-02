var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var arr = ['rock', 'paper', 'scissors'];

//you choose rock
btn1.addEventListener('click', function() {
    var comp = arr[Math.floor(Math.random() * arr.length)];
    if (comp === "rock") {
        document.getElementById("result-text").innerHTML = "It's a tie";
    } else if (comp === "paper") {
        document.getElementById("result-text").innerHTML = "Paper covers rock, you lose!";
    } else {
        document.getElementById("result-text").innerHTML = "Rock crushes scissors, you win!";
    }
});
//you choose paper
btn2.addEventListener('click', function() {
    var comp = arr[Math.floor(Math.random() * arr.length)];
    if (comp === "rock") {
        document.getElementById("result-text").innerHTML ="Paper covers rock, you win!" ;
    } else if (comp === "paper") {
        document.getElementById("result-text").innerHTML = "It's a tie";
    } else {
        document.getElementById("result-text").innerHTML = "Scissors cut paper,you lose!";
    }
});
//you choose scissors
btn3.addEventListener('click', function() {
    var comp = arr[Math.floor(Math.random() * arr.length)];
    if (comp === "rock") {
        document.getElementById("result-text").innerHTML = "Rock crushes scissors, you lose!";
    } else if (comp === "paper") {
        document.getElementById("result-text").innerHTML = "Scissors cut paper, you win!";
    } else {
        document.getElementById("result-text").innerHTML = "It's a tie";
    }
});