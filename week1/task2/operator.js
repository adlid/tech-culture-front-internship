/*------------- Чему будут равны переменные a, b, c и d в примере ниже?-------------*/
let a = 1,
    b = 1;

let c = ++a; // 2
let d = b++; // 1
//a=2
//b =2


/*------------- Чему будут равны переменные a и x после исполнения кода в примере ниже?-------------*/
let a = 2;
let x = 1 + (a *= 2); //5
//a = 4

/*------------- Какой результат будет у выражений ниже?-------------*/
"" + 1 + 0; //10
"" - 1 + 0; //1
true + false //true
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5; //$45
"4" - 2; //2
"4px" - 2; //NaN
7 / 0; //infinity
"  -9  " + 5; //-9 5
"  -9  " - 5; //-14
null + 1; //true
undefined + 1; //true
" \t \n" - 2; //-2

//---------------2-------------------
/*Выведется ли alert? */
if ("0") {
    alert('Привет');
}
//yes

/*Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!» */
{
    let name = prompt('Какое "официальное" название JavaScript?', '');
    if (name == 'ECMAScript') {
        alert('Правильно!');
    } else {
        alert('Не знаете? “ECMAScript”!');
    }
}

/* Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.*/
let number = prompt('Введите число', "");
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

/*Перепишите конструкцию if с использованием условного оператора '?':
let result;
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}*/
let result;
a + b < 4 ? result = 'malo' : result = 'Mnogo';
/*Перепишите if..else с использованием нескольких операторов '?'.
Для читаемости рекомендуется разбить код на несколько строк.*/
let message;
if (login == 'Сотрудник') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}
let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';


//--------------------------3----------------------
/*------Каким будет результат этих выражений?---------*/
5 > 4; //true
"ананас" > "яблоко" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false


//----------------------4------------------------
alert(null || 2 || undefined); //2
alert(alert(1) || 2 || alert(3)); //1
alert(1 && null && 2); //null
alert(alert(1) && alert(2)); //undefined
alert(null || 2 && 3 || 4); //3
/*Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

«Включительно» означает, что значение переменной age может быть равно 14 или 90.*/
if (age >= 14 && age <= 90) {}
/*Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.*/
if (age < 14 || age > 90) {}
/*Какие из перечисленных ниже alert выполнятся?

Какие конкретно значения будут результатами выражений в условиях if(...)?*/
if (-1 || 0) alert('first');
if (-1 && 0) alert('second');
if (null || -1 && 1) alert('third');
//first and third

/*Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».*/
let userName = prompt("Кто там?", '');
if (userName == 'Админ') {
    let pass = prompt('Пароль?', '');
    if (pass == 'Я главный') {
        alert('Здравствуйте!');
    } else if (pass == '' || pass == null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (userName == '' || userName == null) {
    alert('Отменено');
} else {
    alert("Я вас не знаю");
}