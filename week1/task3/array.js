/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву. */
function camelize(str) {
    console.log(str.split('-'));
    return str.split('-').map((elem, i) => {
        if (i == 0) {
            return elem
        } else {
            return elem[0].toUpperCase() + elem.slice(1)
        }
    }).join('');
}
console.log(camelize('background-color'))
camelize('background-color');
/*Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный. */
function filterRange(arr, a, b) {
    return arr.filter((item) => {
        if (item > a && item < b) {
            return item
        }
    })
}
let arr = [5, 3, 8, 1]
let newArr = filterRange(arr, 2, 8);
console.log(newArr)
console.log(filterRange(arr, 1, 5));
/**Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать. */

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    return arr.filter((item, i) => {
        if (i >= a && i <= b) {
            return item
        }
    })
}
console.log(filterRangeInPlace(arr, 1, 4))
filterRangeInPlace(arr, 1, 4)

/**Сортировать в порядке по убыванию */
let arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => b - a);
console.log(arr2)