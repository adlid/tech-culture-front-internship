/*  ----------Каким будет результат выполнения этого кода?----*/
let user = {
    name: "Джон",
    go: function() { alert(this.name) }
}

(user.go)() //Jhon

/*---------------В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.

Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?------------*/
let obj, method;

obj = {
    go: function() { alert(this); }
};

obj.go(); // (1) [object Object]

(obj.go)(); // (2) [object Object]

(method = obj.go)(); // (3) undefined здесь мы при присвоение на новую переменную сразу вызываем метод. так не работает надо после инициализаций использовать

(obj.go || obj.stop)(); // (4) undefined

/*-----------------Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?-------------------*/
function makeUser() {
    return {
        name: "Джон",
        ref: this
    };
};

let user = makeUser();

alert(user.ref.name); // this ссылается на ничего ошибка будет
/*Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.*/
let calculator = {
    a: 2,
    b: 4,
    sum() {
        return (this.a + this.b)
    },
    mul() {
        return (this.a * this.b)
    },
    read() {
        this.a = a;
        this.b = b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
/*Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:*/
//Если честно не знал как это работает
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
}

ladder.up().up().down().up().down().showStep();