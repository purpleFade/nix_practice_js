let weight = 5.6;

if (weight < 4) {
    recommendation = 'Time to eat';
} else if ( weight >= 4 && weight <= 5.5) {
    recommendation = 'Wight is good';
} else if (weight > 5.5) {
    recommendation = 'Timte to GYM';
}

console.log(recommendation)