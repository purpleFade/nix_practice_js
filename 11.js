const someFunc = (a,b) => a.reduce((a,b) => a*b) - b.reduce((a,b) => a*b);

console.log(someFunc([1, 2, 3, 5], [4, 5]))