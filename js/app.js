;(function () {
    "use strict";

var firstResult = document.querySelector('.ba-first');
var secondResult = document.querySelector('.ba-second');
var thirdResult = document.querySelector('.ba-third');

function firstTask() {
    
    var info = prompt('Каково «официальное» название JavaScript?');

    if(info=='ECMAScript'){
        alert('Верно!');
    } else{
        alert('Не знаете? «ECMAScript»!');
    }
}

function secondTask() {
    var a, b, c;
    a = prompt('Введите первое значение');
    b = prompt('Введите второе значение');
    c = a + b;

    var result = c < 4 ? result = 'Мало' : result = 'Много';

    alert(result);

}

function thirdTask() {

    var name, password, result;

    name = prompt('Введите логин');
    if(name=='Админ'){
        password = prompt('Введите пароль');
        if( password == 'Чёрный Властелин'){
            alert("Добро пожаловать!");

        }else if(password === null){
            alert("Вход отменён");
        }
        else{
            alert("Пароль неверен");
        } 
    }else if(name === null){
        alert("Вход отменён");
    }
    else{
        alert("Я вас не знаю");
    }


    
}

firstResult.addEventListener('click', firstTask);
secondResult.addEventListener('click', secondTask);
thirdResult.addEventListener('click', thirdTask);

})();