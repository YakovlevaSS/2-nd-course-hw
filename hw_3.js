/*
//task 1
let password = 'password';
let userPassword = prompt('Введите пароль');
if (password === userPassword) {
    console.log('Пароль введён верно');
} else {
    console.log('Пароль введён неправильно');
}
//task 2
let c = -3;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//task 3
let d = 400;
let e = 34;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//task 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
*/
//task 5
let month = prompt('Введите номер месяца');
switch (true) {
    case month === '1':
    case month === '2':
    case month === '12':
        console.log('Зимний месяц');
        break;
    case month === '3':
    case month === '4':
    case month === '5':
        console.log('Весенний месяц');
        break;
    case month === '6':
    case month === '7':
    case month === '8':
        console.log('Летний месяц');
        break;
    case month === '9':
    case month === '10':
    case month === '11':
        console.log('Осенний месяц');
        break;
    case month >= 13:
    case month <= 0:
        console.log('Такого месяца не существует');
        break;
    default:
        console.log('Вы ввели запрос с ошибкой');
        break;
}

//task 7
let UserNumber = prompt('Введите число');
if (isNaN(UserNumber)) {
    alert('Вы ввели не числовое значение');
} else {
    let result = UserNumber % 2;
}
if (result = 0) {
    alert('Число является чётным');
} else {
    alert('Число является нечётным');
} //Возможно решение, когда до ветвления присвоить переменногй "result" значение, равное остатку от деления на 2. А проверку осуществить через несколько условий (else if).
/*
//task 8
let clienOS = 1; //Переменная определяет ОС мобильного устройства, с которого клиент посетил сайт 0 - IOS, 1 - Android
let clientDevice = 1; //Переменная определяет с которого устройства клиент посетил сайт 0 - ПК, 1 - мобильный телефон
if (clientDevice === 1) {
    if (clienOS === 0) {
        alert('Установите версию приложения для IOS по ссылке');
    } else {
        alert('Установите версию приложения для Android по ссылке');
    }
}
//task 9
let year = 2015;
if (clientDevice === 1) {
    if (clienOS === 0 && year < 2015) {
        alert('Установите облегчённую версию приложения для IOS по ссылке');
    } else if (clienOS === 1 && year < 2015) {
        alert('Установите облегчённую версию приложения для Android по ссылке');
    } else if (clienOS === 0 && year >= 2015) {
        alert('Установите версию приложения для IOS по ссылке');
    } else {
        alert('Установите версию приложения для Android по ссылке');
    }
}
*/
