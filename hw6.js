// // задача 1


// const rectangle = {
//     width: 3,
//     height: 2,
//     getSquare: function() {
//         return this.width * this.height
//     }
// }
// console.log(rectangle.getSquare());



// // задача 2


// const price = {
//     price: 10,
//     discount: '15%',
//     getPrice: function () {
//         return this.price
//     },
//     getPriceWithDiscount: function () {
//         return (1 - 0.01 * parseFloat(this.discount)) * this.price
//     }
// }
// console.log(price.getPrice());
// console.log(price.getPriceWithDiscount());


// //задача 3

// getUserName = function () {
//         return this.name
// }
// const user = {
//     name: "abraham"
// }
// user.getName = getUserName;
// console.log (user.getName());


// //задача 4


// var obj = {
//     height: 10,
//     newHeight: function () {
//         return this. height += 1
//     }
// }
// console.log (obj.newHeight());



// //задача 5

// const numerator = {
//     value: 1,
//     double: function () {
//         this.value *= 2
//         return this
//     },
//     plusOne: function () {
//         this.value += 1
//         return this
//     },
//     minusOne: function () {
//         this.value -= 1
//         return this
//     }

// }
// numerator.double().plusOne().plusOne().minusOne();
// console.log(numerator.value);


// задача 6


// var user = {
//     name: 'Abraham'
// },
// otherUser = {
//     name: 'John',
//     getName: function () {return this.name}
// }

// console.log(user.getName) // в объекте user нет поля getName

// user.getName = otherUser.getName; //одалживание метода getName у объекта user

// console.log(user.getName()) // вызов одолженного метода

// console.log(otherUser.getName()) //вызов метода getName для otherUser



// слайд 36


// задача 1

// function getList() {
//     return this.list
// }

// let users = {
//     length: 4,
//     list: ['abraham', 'james', 'john', 'steven']
// }
// console.log(getList()); //undefined - нет контекста


// users.getList = getList //создаем метод getList и присваиваем функцию getList

// console.log(users.getList()) // выведет поле list из объекта users, потому что предыдущим действием мы создали метод getList , равный внешней функции


// getList.call(users) // выведет поле list из объекта users, потому что вызываем функцию getList , в которую с пломощью метода call передаем контекстом объект users



// задача 2

// var obj = {
//     price: 100,
//     count: 3,
//     totalPrice: function() {return (this.price * this.count)}
// }
// console.log (obj.totalPrice());


// задача 3

// var obj = {
//     price: 100,
//     count: 3,
//     totalPrice: function() { return (this.price * this.count)}
// }
// var obj2 = {
//     price: 10,
//     count: 7,
// }

// console.log(obj.totalPrice.call(obj2));


//задача 4

// let sizes = {
//     width: 5,
//     height: 10
// },
// getSquare = function () {
//     return this.width * this.height
// };

// console.log (getSquare.call(sizes));


// задача 5


// let numbers = [4, 12, 0, 10, -2, -4];

// console.log (Math.min.apply(null, numbers));


//задача 6

// var element = {
//     height: '15px',
//     marginTop: '5px',
//     marginBottom: '5px',
//     getFullHeight: function () {
//         return parseFloat(this.height) + parseFloat(this.marginTop) + parseFloat(this.marginBottom)
//     }
// }

// console.log (element.getFullHeight());

// var block = {
//     height: '5px',
//     marginTop: '3px',
//     marginBottom: '3px',
// }


// console.log(element.getFullHeight.call(block));

//задача 7

var element = {
    height: 25,
    getHeight: function () {
        return this.height
    }
}

let getElementHeight = element.getHeight.bind(element);

console.log(getElementHeight());




