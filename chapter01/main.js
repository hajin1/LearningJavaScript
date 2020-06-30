$(document).ready(function () {

    'use strict';

    paper.install(window); // Paper.js를 전역 스코프에 설치
    paper.setup(document.getElementById('mainCanvas')); // Paper.js를 캔버스에 연결


    var tool = new Tool(); // Paper.js는 툴(tool)객체를 통해 사용자 입력을 처리함
    tool.onMouseDown = function (event) {
        var c = Shape.Circle(event.point, 50);
        c.fillColor = 'green';
        var text = new PointText(200, 200);
        text.justification = 'center';
        text.fillColor = 'white';
        text.fontSize = 20;
        text.content = 'Hello Seongsu';
    };




    paper.view.draw();

    console.log('main.js loaded');
});