// var button = document.getElementsByTagName("button")[0]
// button.addEventListener("mouseleave", function(){
// 	console.log("CLICK!!!");
// })
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}
function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick(){
	if (inputLength() > 0){
		createListElement();
	}

}
function addListAftterKeyPress(event){
	if (inputLength()>0 && event.keyCode === 13){
		createListElement();
	}

}

button.addEventListener("click", addListAfterClick);


	//if(input.value.length > 0){
	//console.log(input.value);
	//console.log("click is working");
// })

input.addEventListener("keypress", addListAftterKeyPress); 
	//console.log(event.which);
	//if(/*input.value.length*/inputLength() > 0 && event.which/*event.keyCode*/== 13){
	 	// var li = document.createElement("li");
	 	// li.appendChild(document.createTextNode(input.value));
	 	// ul.appendChild(li);
	 	// input.value = "";
