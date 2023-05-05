//task 1
let i = 0;
while (i < 2) {
    console.log('Привет');
    i++;
}
//task 2
let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}
//task 3
let b = 7;
do {
    console.log(b);
    b++;
} while (b <= 22);
//task 4
const obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400
}
for (const key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов.`);
}
//task 5
let num = 0;
for (let n = 1000; n >= 50; n = n / 2) {
    num++;
}
console.log(num);

// task 6
ferstFriday = Number(prompt('Введите дату первой пятницы в месяце.'));
for (let date = ferstFriday; date <= 31; date = date + 7) {
    alert(`Сегодня пятница, ${date}-е число. Необходимо подготовить отчет.`)
}


