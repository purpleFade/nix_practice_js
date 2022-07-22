const finalGrade = (exam, proj) => {
    return exam > 90 || proj > 10 ? console.log(100) : exam > 75 || proj >= 5 ? 
    console.log(90) : exam > 50 || proj > 2 ? console.log(75) : console.log(0)
}


finalGrade(0, 15)