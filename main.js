$(document).ready(function() {
    'use strict';

    paper.install(window); // библиотека Paper.js устанавливается в глобальную область видимости
    paper.setup(document.getElementById('mainCanvas')); //Paper.js подключается к холсту и готовится к рисованию
    // var c = new Shape.Circle(200,200,50); //создается объект круга (x, y, radius)
    // c.fillColor = 'green';
    paper.view.draw();

    //Заполняем холст кругами
    // var c2;
    // for(var x=25; x<400; x+=50){
    //     for(var y=25; y<400; y+=50){
    //         c2= new Shape.Circle(x, y, 20);
    //     c2.fillColor = 'green';
    //     }
    // }

    // Для обработки пользовательского ввода библиотека 
    // Paper.js использует объект под названием "tool" (инструмент).

    var tool = new Tool();

    //onMouseDown - обработчик событий(event hadler)
    //всякий раз когда юзер щелкает мышью 
    //Вызывается функция, которую мы закрепили за этим обработчиком
    
    var c = new Shape.Circle(200, 200, 100);
    c.fillColor = 'black';
    var text = new PointText(200 ,200); //создаем текстовый объект PointText(центр экрана)
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';

    tool.onMouseDown = function(event) { 
        var c = new Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';
    };
});
