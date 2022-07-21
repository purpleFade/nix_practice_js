let firstNumber = Number(prompt("Input 1st number: "))

let secondNumber = Number(prompt("Input 2nd number: "))

if (firstNumber > secondNumber) {
    alert(firstNumber + secondNumber)
} else if(firstNumber < secondNumber) {
    alert(firstNumber * secondNumber) 
} else {
    alert("Equal")
}