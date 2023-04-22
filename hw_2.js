/*
let a = 10;
alert (a);
a = 20;
alert (a);

const firstIPhone = "Год выпуска первого iPhone - 2007";
alert (firstIPhone);

const creatorOfJS = "Создатель JavaScript - Брендан Эйх";
alert (creatorOfJS);

let x = 10;
let y = 2;
alert (x + y);
alert (x - y);
alert (x * y);
alert (x / y);

let result = 2 ** 5;
alert (result);

a = 9;
let b = 2;
alert (a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

let age = prompt('Сколько вам лет?');
alert (`Вам ${age} лет`);
*/
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

user.name = prompt ('Введите ваше имя');
alert (`Привет ${user.name}!`);