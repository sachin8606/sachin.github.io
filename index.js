var string = new URLSearchParams(window.location.search);
var myParam = string.get('id');

var obj = [
    "Avedh",
    "Digvijay",
    "Amisha",
    "Apoorva",
    "Shreya",
    "Priyanka"
]

var ele = document.getElementById("person");
var toName = "Hey "+obj[myParam];
let i = 0;
let isCardClicked = false;
var myInterval = () => {

};

function cardClicked() {
    if(!isCardClicked){
        isCardClicked = true;
        myInterval = setInterval(myTimer, 200);
    }
}

function myTimer() {
    ele.innerHTML += toName[i];
    i = i + 1;
    if (i == toName.length) {
        myStopFunction();
        ele.innerHTML += ",";
    }
}

function myStopFunction() {
    clearInterval(myInterval);
}
