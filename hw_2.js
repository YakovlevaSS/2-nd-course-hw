//task 1
let a = 10;
alert (a);
a = 20;
alert (a);
//task 2
const firstIPhone = "Год выпуска первого iPhone - 2007";
alert (firstIPhone);
//task 3
const creatorOfJS = "Создатель JavaScript - Брендан Эйх";
alert (creatorOfJS);
//task 4
let x = 10;
let y = 2;
alert (x + y);
alert (x - y);
alert (x * y);
alert (x / y);
//task 5
let result = 2 ** 5;
alert (result);
//task 6
a = 9;
let b = 2;
alert (a % b);
//task 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);
//task 8
let age = prompt('Сколько вам лет?');
alert (`Вам ${age} лет`);
//task 9
const user = {
	name: 'Софья',
	age: 27,
    isAdmin: true
}
user['city of residence'] = 'Moscow';
user.age = 30;
delete user['city of residence'];
user.info = prompt ('Какую информацию хотите узнать о пользователе?');
alert (user.info);
//task 10
user.name = prompt ('Введите ваше имя');
alert (`Привет ${user.name}!`);