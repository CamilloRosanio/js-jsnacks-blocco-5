const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

console.log('Array originale:');
console.log(numbers);

// SOLUZIONE 1
const plusOne = numbers.map((number) => {
    return number += 1;
});

console.log('Soluzione 1:');
console.log(plusOne);


// SOLUZIONE 2 (COMPATTA)
const newPlusOne = numbers.map(number => number += 1);

console.log('Soluzione 2 compatta:');
console.log(newPlusOne);