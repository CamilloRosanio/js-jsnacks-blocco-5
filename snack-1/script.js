const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

// FOREACH
console.log('FOR EACH');
names.forEach(item => {
    console.log(item);
})

// FOROF
console.log('FOR OF');
for (let item of names) {
    console.log(item);
}