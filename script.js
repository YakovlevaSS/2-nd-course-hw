function defineTimeOfYear() {
    let month = +prompt('Введите номер месяца.');
    if (isNaN(month)) {
        console.log('Вы ввели не числовое значение.');
    } else if (month % 1 != 0 || month < 1 || month > 12) {
        console.log('Такого месяца не существует.');
    } else if (month === 12 || month === 1 || month === 2) {
        console.log('Зима');
    } else if (month <= 5 && month >= 3) {
        console.log('Весна');
    } else if (month <= 8 && month >= 6) {
        console.log('Лето');
    } else if (month <= 11 && month >= 9) {
        console.log('Осень');
    }
}
function checkWords() {
    arrayFruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arrayFruits = arrayFruits.sort(() => Math.random() - 0.5);
    alert(arrayFruits);
    let firstWordUser = prompt('Чему равнялся первый элемент массива?');
    let endWordUser = prompt('Чему равнялся последний элемент массива?');
    let firstWord = arrayFruits[0];
    let endWord = arrayFruits[arrayFruits.length - 1];
if (firstWord.toLowerCase() === firstWordUser.toLowerCase() && endWord.toLowerCase() === endWordUser.toLowerCase()) {
    alert('Поздравляем! Вы угадали оба слова.');
} else if (firstWord.toLowerCase() != firstWordUser.toLowerCase() && endWord.toLowerCase() != endWordUser.toLowerCase()) {
    alert('Вы ответили неверно');
} else {
alert('Вы были близки к победе!')
}
}