// Задача 1
// Напишите функцию (), которая в зависимости от переданных
// в нее целочисленных аргументов "количество дней", будет выводить
// слово "день" в нужно форме ("если передали - 1, то 1 день",
//     "если передали - 3, то 3 дня" и т.д).
function day(x) {
       if ((1 < x % 10)  && (x % 10  <= 4) && x !== 12 && x !==13 && x !== 14 )  {
           return console.log(x + ' дня');
       }    else if ((x % 10 === 1) && (x !== 11) && x !== 111)  {
           return console.log(x + ' день')
       } else {
           return console.log(x + ' дней')
       }
}
day(1);
day(2);
day(3);
day(5);
day(6);
day(11);
day(12);
day(15);
day(101);
day(115);
day(131);

// Задача 2 (не обязательная)
// Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
//     и обрабатывает каждый элемент массива переданной функцией (fn), возвращая новый массив.
//     Функция не должна изменять переданный ей массив.
//     Если аргументы не заданы – выводить сообщение об ошибке
//
// Пример:
//     function square(x) { return x * x; } // возведение в квадрат
// console.log( map(square, [1, 2, 3, 4]) ); // [1, 4, 9, 16]
// console.log( map(square, []) ); // []

// Задача 3
// Написать функцию клонирующую (создающую копию) массива.

function cloneArr() {
    return Arr2 = Arr1;
}
let Arr1 = [1, 2 ,3];
let Arr2 = [];
cloneArr(); // Клонирует Arr1 в Arr2
Arr1 = [3,2,1]; // Изменяем Arr1
console.log(Arr1, Arr2);


//     Задача 4
// Написать функцию подсчета суммы от n до m (рекурсия)
function sumNM(n, m) {
    if (n <= m) {
        S += n;
        sumNM(n+1, m);
        return S;
    }console.log(S);
}
let S = 0; // переменная для записи суммы n и m
sumNM(0, 9);

// Задача 5
// Написать функцию, которая возвращает новую функцию,
//     которая увеличивает/уменьшает переданное число на указанный при карировании шаг (замыкание).
//     Карирование в javascript - прием, позволяющий преобразовать функцию так,
//     на выходе образуется функция, обладающая возможностью частичного применения...
// http://dnzl.ru/view_snippets.php?id=69

let func13 = function(x) {
    return function newFunc() {
        console.log(x);
        x -= 13;
    }
};
let res = func13(65);
res();
res();
res();
res();