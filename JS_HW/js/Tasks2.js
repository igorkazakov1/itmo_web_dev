// Задача 1*
// Есть три вершины X, Y, Z.
//     Их координаты (x1, x2), (y1, y2), (z1, z2) заданы как целые числа.
//     Нужно определить - является ли треугольник с заданными координатами прямоугольным.
let x1 = 12, x2 = 5, y1 = 12, y2 = 12, z1 = 2, z2= 5;
let XY = Math.pow((x2 - y2), 2) + Math.pow((x1 - y1), 2);
let Xz = Math.pow(x2 - z2, 2) + Math.pow(x1 - z1, 2);
let Yz = Math.pow(y2 - z2, 2) + Math.pow(y1 - z1, 2);
if (XY === Xz + Yz) {
    console.log('Треугольник прямоугольный');
} else if (Xz === XY + Yz) {
    console.log('Треугольник прямоугольный');
} else if (Yz === XY + Xz) {
    console.log('Треугольник прямоугольный');
} else {
    console.log('Треугольник не прямоугольный!');
}
//     Задача 2*
// Вывести в консоль название соответствующего времени года (зима, весна и тд), в зависимости от текущего месяца.
//     Месяц можно получить с помощью метода объекта даты:
//     let monthNum = new Date().getMonth();
// Получим номер месяца от 0 до 11 (где, 0 - это январь, 1 - февраль и тд)

let month = new Date().getMonth();
if ((0 <= month && month <= 1) || month === 11 ) {
    console.log('Зима');
} else if (2 <= month && month <= 4) {
    console.log('Весна');
} else if (5 <= month && month <=7) {
    console.log('Лето');
} else {
    console.log('Осень');
}

// Задача 6*
// Задать количество тарелок и количество моющего средства.
//     Моющее средство расходуется из расчета 0,5 на одну тарелку.
//     В цикле выводить сколько моющего средства осталось после мытья каждой тарелки
// В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.

let dishW = prompt('Сколько моющего средства есть?');
dishW = parseFloat(dishW)
if (dishW <=0) {
    console.log('Нечем мыть!')
}
let plate = prompt('Сколько тарелок мыть?');
plate = parseFloat(plate)
if (plate <=0 ) {
    console.log('Нечего мыть!')
}
for ( ;(dishW >= 0); plate--) {
    console.log('Отсталось тарелок - ', plate, 'Осталось моющего средства', dishW)
    if (plate <=0) break;
    dishW -= 0.5;
}

// Задача 8*
// Создайте программу, выводящую на экран все неотрицательные элементы последовательности 90 85 80 75 70 65 60.
let p , a, n;
p = [90];
a = 90;
n = 5;
for (i=2;a-i*n >= -100 ; i++ ) {
    p.push(a-i*n);
    if (a-i*n <= 0) break;
}
console.log(p.join(', '));


// Задача 9*
// Создайте программу, выводящую на экран первые 20 элементов последовательности 2 4 8 16 32 64 128.
let p2 , b;
let j=2;
p2 = [j];
for (;j<=20; ++j ) {
    p2.push(Math.pow(2,j));
}
console.log(p2.join('; '));
