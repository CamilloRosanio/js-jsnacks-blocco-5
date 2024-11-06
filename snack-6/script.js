const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

console.log('Tutte le zucchine:');
console.log(zucchine);

// In questo caso manca il RETURN perchè è implicito. Se avessi scritto {} avrei dovuto utilizzarlo.
const longZucchine = zucchine.filter(zucchina => zucchina.length >= 15);
console.log('Zucchine lunghe:');
console.log(longZucchine);

// Soluzione 1
// const otherZucchine = zucchine.filter(zucchina => zucchina.length < 15);
// Soluzione 2 (NOT !)
const otherZucchine = zucchine.filter(zucchina => !(zucchina.length >= 15));
console.log('Zucchine rimanenti:');
console.log(otherZucchine);


// TEST di verifica per capire se aggiungendo una property venissero modificati tutti gli Array: risultato SI.
// longZucchine.forEach(item => item.property = 'Test');
// console.log(zucchine);


// TEST di creazione di un nuovo Array con dei cloni degli Object originali
let clonedZucchine = zucchine.map((zucchina) => {

  // Per ottenere dei "nuovi" oggetti che sono la copia di quelli dell'Array originale, devo dichiarare una variabile:
  const nuovaZucchina = { ...zucchina, newProperty: 'property'};

  return nuovaZucchina;
});

console.log('Zucchine clonate + Property extra:');
console.log(clonedZucchine);


// SOLUZIONE FOR EACH
// Performante perchè in 1 solo controllo smisto già su 2 Array
const arrayLong = [];
const arrayShort = [];

zucchine.forEach( (zucchina) => {
  if(zucchina.length >= 15) {
    arrayLong.push(zucchina);
  } else if(zucchina.length >= 15) {
    arrayShort.push(zucchina);
  }
})