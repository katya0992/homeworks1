

// 1. Создать конструктор для производства автомобилей. Конструктор
// должен принимать марку автомобиля и возраст машины.
// Конструктор должен иметь метод, который возвращает марку, и
// второй метод, который возвращает год производства машины (год
// текущий минус возраст машины, использовать Date для получения
// текущего года)
// ...
// var lexus = new Car(‘lexus’, 2);
// lexus.получитьМарку(); // “Lexus”
// lexus.получитьГодВыпуска(); // 2014 (2016-2);
// Марка машины всегда должна возвращаться с большой буквы!


function Car(brand, age) {
    let yearNow = (new Date()).getFullYear()
    this.brand = brand.substr(0,1).toUpperCase() + brand.substr(1) ;
    this.age = age;
    this.getBrand = function() { return this.brand }
    this.getIssueDate = function() { return yearNow - this.age }
}

var lexus = new Car('lexus', 2);
console.log(lexus.getBrand());
console.log(lexus.getIssueDate());


// 2. Написать конструктор, который умеет элементарно шифровать
// строки (например, сделать из строки строку-перевертыш, или
// заменить все символы их цифровым представлением, или любой
// другой метод). Конструктор при инициализации получает строку и
// имеет следующие методы:
// a. показать оригинальную строку
// b. показать зашифрованную строку
// c. стереть все данные - метод должен удалить все строки
// Строки не должны быть доступны через this, только с помощью методов.


function Encoding(str) {
    let s = str, es=""
    for (let i=0; i<s.length; i++) {es += s.charCodeAt(i)}
    this.getOriginalStr = function() { return s }
    this.getEncodedStr = function() { return es }
    this.eraseStr = function() { s=""; es="" }
}

var str1 = new Encoding('Hello')
console.log(str1.getOriginalStr())
console.log(str1.getEncodedStr())
str1.eraseStr()
console.log(str1.getOriginalStr())
console.log(str1.getEncodedStr())


// 3. Создать класс, который создает экземпляры, работающие со строкой
// и имеет следующие свойства и методы:
// a. свойство “строка” будет содержать строку
// b. методы для получения и установки строки
// c. метод для получения длины строки
// d. при вызове toString() вернуть строку
// e. при приведении объекта к числу вернуть длину строки
// var str = new КлассСтрока(‘test’);
// str.получить(); // ‘test’
// +str; // 4
// str.toString(); // ‘test’


function Str(str) {
    this.str = str
    this.getStr =   function()    { return this.str }
    this.setStr =   function(str) { this.str = str; return this.str}
    this.getLen =   function(str) { return this.str.length}
    this.toString = function(str) { return this.str }
    this.valueOf =  function()    { return this.str.length}
}

var str = new Str('test');
console.log(str.getStr()) 
console.log(str.getLen()) 
console.log(+str) 
console.log(str.toString()) 
console.log(str.setStr("Hi!"))
