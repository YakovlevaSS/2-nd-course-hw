//Task 1
function getLowerCase (a) {
    return a.toLowerCase();
}
console.log(getLowerCase(prompt('Введите данные.')));

//Task 2
function searchStart(arrayStr, checkingStr) {
    let result = arrayStr.filter((element) => element.toLowerCase().startsWith(checkingStr.toLowerCase()))
    console.log(result);
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); 
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); 
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

//Task 3 
const originalNumber = 32.58884;
console.log(Math.round(originalNumber)); // ближайшее целое
console.log(Math.floor(originalNumber)); // округление в менньшую сторону
console.log(Math.ceil(originalNumber)); // округление в большую сторону

//Task 4
const minMaxArray = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...minMaxArray));
console.log(Math.max(...minMaxArray));

//task 5
function getRandomTen () {
    console.log(Math.floor(Math.random()*10)+1);
}
getRandomTen();

//task 6
function getRandomArrNumbers(numbers) {
    let randomArrNumbers = [];
    for (let i = 0; i < Math.floor(numbers / 2); i++) {
        randomArrNumbers.push(Math.round(Math.random() * numbers));
    }
    console.log(randomArrNumbers);
}
getRandomArrNumbers(7);
getRandomArrNumbers(12);

//task 7
function getRandomMinMax (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
console.log(getRandomMinMax(2, 89));

//task 8
let currentData = new Date();
console.log(currentData);

//task 9
// currentData с текущей датой создана ранее
newDate = new Date(currentData.setDate(currentData.getDate() + 73));
console.log(newDate);

//task 10
function writeDate() {
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
let hour = myDate.getHours();
let minute = myDate.getMinutes(); 
let second = myDate.getSeconds();
if (hour < 10) { 
	hour = "0" + hour;
}
if (minute < 10) { 
	minute = "0" + minute; 
}
if (second < 10) { 
	second = "0" + second;
}
let today = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()] + "." + " Время: " + hour + ":" + minute + ":" + second;
console.log(today);
}
writeDate();