/*
//Task 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
function compare(a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
};
console.log(people.sort(compare));

//task 2
function isPositive(number) {
   return number > 0;
}
function isMale(a) {
    return a.gender === "male";
}
function filter(arr, ruleFunction) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
} 

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const genderPeople = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(genderPeople, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//Task 3
function showDate() {
console.log(new Date);    
}

let timerId = setInterval(showDate, 3000);
setTimeout(() => { clearInterval(timerId);}, 30000);

//Task 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
    callback();
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})
*/

//Task 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond( setTimeout(() =>sayHi('Глеб'), 2000)) ;