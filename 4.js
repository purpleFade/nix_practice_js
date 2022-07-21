// 1 способ

let array = ['Саша', 'Петя', 'Оксана']

array[0] = 'Оксана'
array[1] = 'Олег'
array[2] = 'Саша'

console.log(array)

// 2 способ

// let arr = ['Саша', 'Петя', 'Оксана'];

// const secondWay = arr.map((item, index, ar) => {
//    if(item === 'Петя')  item = 'Олег';
//    return item;
// }).reverse();

// console.log(secondWay);