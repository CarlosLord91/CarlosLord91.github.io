function addToBody(text){
	document.body.innerHTML +="<p>"+text+"</p>";
}
/*
let yourname = prompt("what is your name");

console.log("Hi"+yourname);
*/

let temperature = prompt("what is the temperature outside?");

temperature = Number(temperature);

if(temperature <= 32){
	addToBody("It's freezing!stay inside!");
}else if(temperature >= 80){
	addToBody("Its hot outside");
}else{
	addToBody("Okay");
}
addToBody("Have a nice day!");
