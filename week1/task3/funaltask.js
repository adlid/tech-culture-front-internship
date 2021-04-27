// Задача №1
// Дан массив с числами nums.Мы определяем текущую сумму массива
// как runningSum[i] = sum(nums[0]…nums[i]).
// Вернуть сумму элементов массива nums.
let emp = [];
let arr = [1, 2, 3, 4, 5];

function runningSum(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        emp.push(count += nums[i])
    }
}
runningSum(arr);
console.log(emp)
    // with method array
let count = 0;
let newarr = arr.map((elem, i) => {
    return count += elem
})
console.log(newarr)

// Задание №2
// Вам дана целочисленная матрица счетов m x n, где accounts[i][j] — это сумма денег i-го
// клиента в j-м банке. Верните богатство, которое есть у самого богатого клиента.
//     Богатство клиента — это сумма денег на всех его банковских счетах.
//     Самый богатый клиент — это тот, кто обладает максимальным богатством.
let accounts = [
    [1, 5],
    [7, 3],
    [3, 5]
]
let filterred = Math.max.apply(null, accounts.map(elem => elem.reduce((sum, elem2) => sum + elem2)));
console.log(filterred)

// Задание №3
// Дана строка s и целочисленный индекс массива одинаковой длины.
// Строки будут перетасованы таким образом, что символ в i-й позиции переместится в
// indices[i] в перетасованной строке.Верните перетасованную (перемешанную) строку.
let string = 'baha';
let strinarr = [1, 0, 2, 3];
let emtyArr = [];
for (let i = 0; i < strinarr.length; i++) {
    emtyArr[strinarr[i]] = string[i]
}
emtyArr = emtyArr.join('');
console.log(emtyArr)

// Задание №4
// Предложение — это список слов, разделенных одним пробелом без начальных и
// конечных пробелов. Каждое из слов состоит только из прописных и строчных английских
// букв (без знаков препинания).Например, &quot;Hello World&quot;, &quot;HELLO&quot; и
// &quot;hello world hello world&quot; — это все предложения.Вам дается предложение s и
// целое число k. Вы хотите усечь s так, чтобы он содержалтолько первые k слов. Предложение
// s возвращается после его усечения.

function truncateSentence(s, k) {
    result = s.split(' ').map(elem => elem)
    result.splice(k)
    console.log(result)
}
truncateSentence('What is the solution to this problem', 2)