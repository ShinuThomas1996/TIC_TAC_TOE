var turnTell = "1";
var colour = "red";
var exe = false;
var cc = "X";
var arr = [];

       

function tac() {

    turnTell *= -1; 

    if (turnTell == 1) {
        document.getElementById("turnTeller").innerHTML = "X's turn";
    cc = "X";
    colour = "red";
    
    }
    
    if (turnTell == -1) {
      document.getElementById("turnTeller").innerHTML = "O's turn";
   cc = "O";   
   colour = "blue";
   
   }
   arr.push(Math.floor(Math.random) * 20)
   tic();
}


function tic() {
   
var one = document.getElementById("1").value;
var two = document.getElementById("2").value;
var three = document.getElementById("3").value;
var four = document.getElementById("4").value;
var five = document.getElementById("5").value;
var six = document.getElementById("6").value;
var seven = document.getElementById("7").value;
var eight = document.getElementById("8").value;
var nine = document.getElementById("9").value;   


if (one == two && one == three) {
   text();
}
else if (four == one && four == seven) {
   text();  
}
else if (six == three && six == nine) {
   text();
}
else if (eight == seven && eight == nine) {
   text();
}
else if (five == four && five == six) {
   text();
}
else if (five == two && five == eight) {
   text();
} 
else if (five == three && five == seven) {
   text();
}
else if (five == one && five == nine) {
   text();
}
else if (arr.length == 9) { 
document.getElementById("turnTeller").innerHTML = "DRAW";

if (exe == false) {
turnTell *= -1;
document.getElementById("btn").style.display = "block";
exe = true;
}

}
}

function retry() {
turnTell = "1";
colour = "red";
exe = false;
cc = "X";
arr = [];

for (i = 1; i < 10; i++) {
document.getElementById(i).style.backgroundColor = "gray";

document.getElementById(i).value = i;

document.getElementById(i).innerHTML = "";

document.getElementById("turnTeller").innerHTML = "";

document.getElementById("btn").style.display = "none";

document.getElementById(i).disabled = false;
}
}
var a=0;
var b=0;

function text() {

if (exe == false) {
turnTell *= -1;
document.getElementById("btn").style.display = "block";
exe = true;
}

for (i = 1; i < 10; i++) {
document.getElementById(i).disabled = true;}

if (turnTell == 1) {
for (i = 1; i < 10; i++) {a++;
document.getElementById("turnTeller").innerHTML = "X WON!";
if (i == 2 || i == 4 || i == 6 || i == 8) {
document.getElementById(i).style.backgroundColor = "gray";
document.getElementById(i).innerHTML = "";
} else {
document.getElementById(i).style.backgroundColor = "red";
document.getElementById(i).innerHTML = "X";}}

} else {
for (i = 1; i < 10; i++) {b++
document.getElementById("turnTeller").innerHTML = "O WON!";
// document.getElementById("turnTeller").src = "congrats.jpg";
document.getElementById("turnTeller").src = "congrats.jpg";
if (i == 5) {
document.getElementById(i).style.backgroundColor = "gray";
document.getElementById(i).innerHTML = "";
} else {
document.getElementById(i).style.backgroundColor = "blue";
document.getElementById(i).innerHTML = "O";}} 
}
document.getElementById("a").innerHTML = a/9;
document.getElementById("b").innerHTML = b/9;
}



function button(int) {
    this.int = int;
           document.getElementById(this.int).innerHTML = cc; document.getElementById(this.int).style.backgroundColor = colour;
    document.getElementById(this.int).disabled = true;
    document.getElementById(this.int).value = cc;
    
    tac();
}