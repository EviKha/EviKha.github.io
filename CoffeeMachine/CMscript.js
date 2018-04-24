class CoffeeMachine {
	constructor(coffeeArray) {
		console.log(coffeeArray)
		this.coffeeArray = coffeeArray
		this.render();
	}
	render() {
		var countSum = 0
		var conteinerIdRoot = document.getElementById('coffeeList');
		this.coffeeArray.forEach(function(element){
			conteinerIdRoot.innerHTML 
			+= "<p>"
			+ "<button id ="+ element.id +">"
			+  element.name + " : "	+ element.price + " " + "</button>"
			+ "</p>"
		})
		var conteinerIdSelect = document.getElementById('selectedcoffee');
		this.coffeeArray.forEach(function(element){
			document.getElementById(element.id).addEventListener("click", function(){
				conteinerIdSelect.innerHTML = "<p>" + element.name + " : "+ element.price  + "</p>"
				countSum += element.price
				document.getElementById("end").innerHTML ="total: " + countSum
			});
		})
		var buttonBut = document.getElementById('but');
		var input = document.getElementById("cashInput");
		buttonBut.addEventListener("click", function(){
			console.log(countSum);
			console.log(input.value);
			var delivery = input.value - countSum;
			input.value = delivery;
			countSum = 0;
			document.getElementById("end").innerHTML ="total:0 "

		});
	}
}

var coffeeArray = [
	{name: 'capuchino', price : 10, id : "cup"},
	{name: "americano", price : 5,  id : "ame"},
	{name: "chai", price : 20,  id : "chai"},
	{name: "water", price: 0, id: "water"}
	]
var CoffeeMachineObj = new CoffeeMachine(coffeeArray)
// CoffeeMachineObj.render()
console.log(CoffeeMachineObj)





//косруктор то что строит обьект. в круглых скобках это входные параметры которые принимает в себя обьект, в фигурныхэто тело функции(класс)