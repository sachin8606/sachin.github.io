var string = new URLSearchParams(window.location.search);
var myParam = string.get('id');

var obj = [
    "Avedh",
    "Digvijay",
    "Amisha",
    "Apoorva",
    "Shreya",
    "Priyanka",
    "Satnam"
]

// var ele = document.getElementById("person");
// var toName = "Hey "+obj[myParam];
// let i = 0;


// let isCardClicked = false;
// var myInterval = () => {

// };

// function cardClicked() {
//     if(!isCardClicked){
//         isCardClicked = true;
//         myInterval = setInterval(myTimer, 200);
//     }
// }



// Visits
// window.onload = function(e){
 
// }


function send(){   
    Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sachinrangarprof@gmail.com",
    Password: "435A8374CE268BF7F9B07781277F3932EA74",
    To: 'sachinrangarprof@gmail.com',
    From: "sachinrangarprof@gmail.com",
    Subject: "Web visits",
    Body:`Hey,${obj[myParam]} visited on ${Date()}`
  })
    .then(function (message) {
      console.log(message)
    });}
// function myTimer() {
//     ele.innerHTML += toName[i];
//     i = i + 1;
//     if (i == toName.length) {
//         myStopFunction();
//         ele.innerHTML += ",";
//     }
// }

// function myStopFunction() {
//     clearInterval(myInterval);
// }



