var todos = [
	"wake up",
	"brush tooth",
	"have a breakfast",
	"myselfeducation"
];
var todosImportant = [
	"wake up",
	"brush tooth",
	"have a breakfast",
	"myselfeducation"
];
var todosLength = todos.length;

// for ( var i=0; i < todos.Length; i++) {
// 	console.log(todos[i], i);
// }
function logTodos(todo, i){
	console.log(todo, i);
}
todos.forEach(logTodos);
todosImportant.forEach(logTodos); 

// var counterOne = 10;
// while(counterOne > 0) {
// 	console.log(counterOne);
// 	counterOne --;

// }