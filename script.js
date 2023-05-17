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
