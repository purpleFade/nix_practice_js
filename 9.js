let array = [1, 2, 3, 4]

const mult = arr => {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
       result *= arr[i];
    }
    console.log(result)
}

mult(array);