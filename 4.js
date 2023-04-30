/*
Напишите функцию, которая принимает два числа. 
Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. 
Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. 
Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
*/

let num1 = +prompt('Введите первое число от 1 до 10');
let num2 = +prompt('Введите второе число от 11 до 20');

if(typeof(num1) == 'number' && (num1 >= 1 && num1 <= 10) && !isNaN(num1) && 
	typeof (num2) == 'number' && (num2 >= 11 && num2 <= 20) && !isNaN(num2)) {
	
    let timer = setInterval(function(){
      return (num1 <= num2) ? console.log(num1++) : clearInterval(timer);
	  }, 1000, num1, num2);
	
} else {
  console.log('Неверные данные');
} 