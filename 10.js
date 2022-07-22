let array = ['Никита', 'Анастасия', 'Саша' ,'Дима', 'Саныч', 'Ольга']

const delNames = arr => {
    const unwantedNames = ["Дима", "Саша", "Ольга", "Никита"]

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === unwantedNames[j]) {
                arr.splice(i, 1);
            }
        }
    }

    console.log(arr);
} 

delNames(array);