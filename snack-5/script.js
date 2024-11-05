const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// FILTER
const evenNumbers = nums.filter(item => {
    if(item % 2 == 0) return item;
});

console.log('FILTER');
console.log(evenNumbers);


// FILTER (COMPATTO)
const newEvenNumbers = nums.filter(item => item % 2 == 0);

console.log('FILTER (COMPATTO)');
console.log(newEvenNumbers);
