//task 1
function compareNum(a,b) {
    if (a <= b) {
        return(`${a}`);
    } else {
        return(`${b}`);
    }
}
console.log(compareNum (6 , 6));
console.log(compareNum (3 , 5)); 
console.log(compareNum (-7 , 2));
//task 2
function checkParity(a) {
    if (a % 2 == 0) {
        return("Число является четным");
    } else {
        return("Число является нечётным");
    }
}
console.log(checkParity (0));
console.log(checkParity (7));
console.log(checkParity (0));
//task 3
function squareClg (a) {
    console.log(a ** 2);
}
squareClg (9);

function squareRetern (a) {
    return (a ** 2)
}
let result = squareRetern (9);
console.log(result);
//task 4
function helloUser(age) {
      if (age <= 0) {
        console.log('Вы ввели отрицательное число');
    } else if (age < 13) {
        console.log('Привет, друг!');
    } else {
        console.log("Добро пожаловать!");
    }
}
let age = prompt ('Сколько вам лет');
helloUser (age);
//task 5
let c = +prompt ('Введите первое число');
let d = +prompt ('Введите второе число');
function multiply(c , d) {
    if (isNaN(c) || isNaN(d)) {
        return ('Одно или оба значения не являются числом');
    } else {
        return (c * d);
    }
}
let multiplyResult = multiply(c , d);
console.log(multiplyResult);

//task 6
let checkNumber = function () {
    let a = +prompt ('Введите число.');
    if (isNaN(a)) {
        console.log('Вы ввели не числовое значение.');
    } else {
        a **= 3
        console.log(`n в кубе равняется ${a}`);
    }
}
checkNumber()
//task 7
const circle1 = {
    radius: 5,
    getArea: function () {
        return(`Площадь круга составляет ${Math.PI * this.radius ** 2}`)
    },
    getPerimetr: function () {
        return(`Длина окружности составляет ${2 *Math.PI * this.radius}`)
    },
}
const circle2 = {
    radius: 10, 
    getArea: function () {
        return(`Площадь круга составляет ${Math.PI * this.radius ** 2}`)
    },
    getPerimetr: function () {
        return(`Длина окружности составляет ${2 *Math.PI * this.radius}`)
    },    
}
console.log(circle1.getArea());
console.log(circle1.getPerimetr());
console.log(circle2.getArea());
console.log(circle2.getPerimetr());

