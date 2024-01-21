function setTime(){
    var d = new Date();
    var currHour24 = d.getHours();
    var currHour12 = currHour24 % 12; 
    var currMinute = d.getMinutes();
    var currSecond = d.getSeconds();
    
        var hourElement = document.querySelector('.hour');// Находим элемент с классом hour
        var hourAngel = 90 + currHour12 * 30 + currMinute / 2;//Вычисляем угол часовой стрелки
        hourElement.style.transform = `rotate(${hourAngel}deg)`;// Меняем угол поворота
    
        var minuteElement = document.querySelector('.minute');
        var minuteAngel = 90 + currMinute * 6;
        minuteElement.style.transform = `rotate(${minuteAngel}deg)`;
    
        var secondElement = document.querySelector('.second');
        var secondAngel = 90 + currSecond * 6;
        console.log(secondAngel);
        secondElement.style.transform = `rotate(${secondAngel}deg)`;
    }
    setInterval(setTime, 1000);