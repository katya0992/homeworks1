
// 1. Что выведет следующий код? Почему?
// выдает UNDEFINED , потому что в точке вызова переменная еще не определена 

// console.log(getBigName(userName));

// function getBigName(name) {
//  name = name + '';
//  return name.toUpperCase();
// }


// var userName = 'Ivan';


// задача 2 Какое значение вернет функция test? Почему?

/*выведет IVAN , потому что функция тест вызовет ф-цию getBigName с параметром равным 
глобальной переменной userName*/

// function test() {
//  var name = 'Vasiliy'; // не используется 
//  return getBigName(userName); // это глобальная переменная , описаннаая ниже
// }

// function getBigName(name) {
//  name = name + '';
//  return name.toUpperCase();
// }

// var userName= 'Ivan';
// console.log(test());


// 3. Что выведет функция getFood? Почему?
// анонимная ф-ция вызывает ф-цию getFood , 
// которая выводит глобальную переменную со значением cucumber

// var food = 'cucumber';
// (function () {
//  var food = 'bread';
//  getFood();
// })();

// function getFood() {
//  console.log(food);
// }



// 1. Какое значение вернет функция getDollar? Почему?
// Две переменные с одним именем: глобальная и локальная . Берется локальная.
// Если переименуем локальную - напечатается значение глобальной - 30. 

// var dollar,  getDollar;

// (function () {
//     var dollar = 0;
//     getDollar = function () {
//     return dollar;
//     }
// }());

// dollar = 30;
// console.log(getDollar());


// 2. Что будет выведено в консоль? Почему?
// Вначале вызов анонимной ф-ции выведет Hello Word , 
//а затем последний консол лог выведет ошибку,
//потому что нет глобальной переменной text,
//а локальная недоступна в глобальном контексте 

// var greet = 'Hello';

// (function () {
//  var text = " World";
//  console.log(greet + text);
// }());

// console.log(greet + text);


// 3. Создайте функцию которая бы умела делать:




var minus = function (a) {
   
    return function (b) {
         if (b==undefined)  b=0;       // То же,что b = b || 0
         if (a==undefined) return b;  // Не вычитаем! Пример с 6    
         else  return a-b
    }
}

console.log(minus(10)(6)); // 4
console.log(minus(5)(6)); // -1
console.log(minus(10)()); // 10
console.log(minus()(6)); // 6
console.log(minus()()); // 0


// 4. Реализовать функцию, которая умножает и умеет запоминать
// возвращаемый результат между вызовами:

// function MultiplyMaker(init) {
//   var currentCount = init;

//   return function(val) {

//     return currentCount *= val;
//   };
// }
// const multiply = MultiplyMaker(2);
// console.log(multiply(2)); // 4 (2 * 2)
// console.log(multiply(1)); // 4 (4 * 1)
// console.log(multiply(3)); // 12 (4 * 3)
// console.log(multiply(10)); // 120 (12 * 10)


// 5. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

// var module = 
// (function () {
//     var currentStr = "";
//     function setStr(str) {
//          currentStr = (str + "");
//          return currentStr
//     }
//     function getStr () {return currentStr}
//     function getStrLength () {return currentStr.length}
//     function reverseStr () {return currentStr.split('').reverse().join('')}

//     return {
//         setStr,
//         getStr,
//         getStrLength,
//         reverseStr
//     };
// }
// )();
// console.log(module.setStr('hello'));
// console.log(module.getStr()); // 10
// console.log(module.getStrLength()); // 10
// console.log(module.reverseStr());

// console.log(module.setStr(''));

// console.log(module.setStr(12));



// 6. Создайте модуль “калькулятор”, который умеет складывать, умножать,
// вычитать, делить и возводить в степень. Конечное значение округлить
// до двух знаков после точки (значение должно храниться в обычной
// переменной, не в this)
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо
// округлить)
// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100


// var calc = (function () {
//    var value = 0;
//    function setVal(v) {
//       value = v; return this
//     }
//    function plus(v) {value += v; return this}
//    function multiply(v) {value *= v; return this}
//    function devide(v) {value /= v; return this}
//    function power(v) {value = Math.pow(value,v); return this}
//    function getVal() {return value}
//    return {
//       setVal,
//       plus,
//       multiply,
//       devide,
//       power,
//       getVal
//    };
// })();

// console.log(calc.setVal(10).power(2).getVal().toFixed(2));
// console.log(calc.setVal(20.779).power(2).getVal().toFixed(2));