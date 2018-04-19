var position = document.getElementById('position');
var cursore = document.getElementById('cursore');
var pool = document.getElementById('pool');
var x = 0,y = 0, dX = 50;
// построение игрового цикла. обработчик обновляет цикл каждую свою итерацию

// присваиваем событие. навешиваем обрабочик события 
//который принимает функцию и количество обновлений
setInterval(function(){
	//событие которое обновляет позицию курсора
	position.innerHTML = 'позиция курсора: '+x+' / '+y;
//Отслеживаем позицию курсора
//чтобы курсор был по середине квадраты вычитаем отклонение 25 Px 
	cursore.style.left = x-25+'px';
	cursore.style.top = y-25+ 'px';
	dX += 1; //переменная будет сдвигать pool в право. ПЕРЕМЕЩЕНИЕ
	pool.style.left = dX+'px';
}, 1000 / 60);

// window.onmousemove = function (event) {
//напишем пространство относительно которого будет отсчет POOL
pool.onmousemove = function (event) {
	// оперделим событие . в браузере посмотрим интересующие события: page x and page y/ начало от левого верхнего угла
//PageX И page Y параметры ослеживания курсора. наиболее точно показывают среди остальных существующих параметров
	x = event.pageX;
	y = event.pageY;
};
// window.onclick = function(event){
// 	position.innerHTML = 'позиция курсора: '+x+' / '+y;
// 	console.log(event);

// }