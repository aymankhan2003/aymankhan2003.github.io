
var name = prompt("Input Your Name")
var year = prompt("Input Your Age")
var welcome = document.getElementById("welcome")
welcome.innerHTML = "Welcome " + name +"." + " Hope you Enjoy!";
var age = document.getElementById("age")
age.innerHTML = "I hear you are " + year + " years old.";
age.style.color = "Red";
welcome.style.color = "Red";

