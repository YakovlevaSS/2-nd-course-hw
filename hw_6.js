// task 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] === 10) {
        break;
    }
}
//task 2
console.log(numbs.indexOf(4) + 1); // из условия не понятно, если именно поожение эдемента найти, то 3. Если нужно было просто вывести индекс элемента "4", то убрать "+1" из формулы

//task 3
const arr = [1, 3, 5, 10, 20];
let str = arr.join(' ');
console.log(str);

//task 4
const threeArray = [];
for (let i = 0; i < 3; i++) {
    threeArray[i] = [];
    for (let j = 0; j < 3; j++) {
        threeArray[i][j] = 1;
    }
}
console.log(threeArray);

//task 5
const arrOne = [1, 1, 1];
const newArrOne = arrOne.concat(2, 2, 2);
console.log(newArrOne);

//Task 6
const arrSort = [9, 8, 7, 'a', 6, 5];
arrSort.sort();
arrSort.pop();
console.log(arrSort);

//Task 7
const arrCheck = [9, 8, 7, 6, 5];
let check = +prompt('Введите число');
if (arrCheck.includes(check)) {
    console.log(`Элемент ${check} содержится в архиве`);
}
else {
    console.log(`Элемент ${check} не содержится в архиве`);
}

//Task 8
str = 'abcdef';
const strResult = str.split('').reverse().join('')
console.log(strResult);

//Task 9
const insertedArr = [[1, 2, 3,], [4, 5, 6]];
const newArr = insertedArr.flat(1);
console.log(newArr);

//Task 10
const bigArr = [1, 3, 4, 8, 9, 10];
for (let index = 0; index < bigArr.length - 1; index++) {
    alert(bigArr[index] + bigArr[index + 1])
}

//Task 11
function getSquare(numbs) {
    return numbs.map((el) => el ** 2);
}
console.log(getSquare([2, 13, 26, 4]));

//Task 12
function getLengthWords(words) {
    return words.map((el) => el.length);
}
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

//Task 13
function filterPositive(array) {
    let result = array.filter((el) => el < 0);
    console.log(result);
}
filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]

//Task 14
let RandomArray = [];
for (let i = 0; i < 10; i += 1) {
    RandomArray.push(Math.round(Math.random() * 10));
}
console.log(RandomArray);

let evenRandomArray = RandomArray.filter((el) => el % 2 == 0);
console.log(evenRandomArray);

//Task 15
let RandomArray2 = [];
for (let i = 0; i < 6; i += 1) {
    RandomArray2.push(Math.round(Math.random() * 9 + 1));
}
console.log(RandomArray2);
let arithmeticMean = (RandomArray2.reduce((sum, current) => sum + current, 0)) / RandomArray2.length;
console.log(arithmeticMean);