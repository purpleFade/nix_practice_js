const between = (a, b) => {
    let arr = []
    while (a !== b + 1) {
        arr.push(a)
        a++
    }
    console.log(arr)
}

between(-2, 5)