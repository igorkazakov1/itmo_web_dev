/*
Задача 1
Написать программу, которая будет генерировать игровое поле размером N x N .
Где N - количество ячеек,
каждая ячейка - отдельный div (размеры div на Ваше усмотрение).
Значение N  получаем от пользователя.
*/
function FieldCreate(N) {
    for (let i = 0; i < N; i++) {
        let createFlexConteiner = document.createElement('div');
        document.body.appendChild(createFlexConteiner);
        createFlexConteiner.classList.add('conteiner');
        for (let i = 0; i < N; i++) {
            let createDiv = document.createElement('div');
            createFlexConteiner.appendChild(createDiv);
            createDiv.classList.add('border');
        }
    }
}
FieldCreate(prompt("Введите размер поля N x N"));
