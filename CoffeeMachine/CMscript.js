class CoffeeMachine {
	constructor(coffeeArray) {
		console.log(coffeeArray)
	this.coffeeArray = coffeeArray

	}

	render() {
		var countSum = 0

		var conteinerIdRoot = document.getElementById('root');
		console.log(coffeeArray)
		this.coffeeArray.forEach(function(element){
			conteinerIdRoot.innerHTML 
			+= "<p>"
			+ element.name + " : "	+ element.price + " "
			+ "<button id ="+ element.id +">" + "Please" + "</button>"
			+ "</p>"
		})
		var conteinerIdSelect = document.getElementById('selectedcoffee');
		this.coffeeArray.forEach(function(element){
			document.getElementById(element.id).addEventListener("click", function(){
				conteinerIdSelect.innerHTML += "<p>" + element.name + " : "+ element.price  + "</p>"
			countSum += element.price
				document.getElementById("end").innerHTML = countSum
			});

		})


	}
}

var coffeeArray = [
	{name: 'capuchino', price : 10, id : "cup"},
	{name: "americano", price : 5,  id : "ame"},
	{name: "chai", price : 20,  id : "chai"}
	]
var CoffeeMachineObj = new CoffeeMachine(coffeeArray)
CoffeeMachineObj.render()
console.log(CoffeeMachineObj)

//косруктор то что строит обьект. в фигурных скобках это входные параметры который принимает в себя обьект