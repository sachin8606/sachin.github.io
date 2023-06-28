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
ele.innerText = "Hey "+ obj[myParam] + ",";