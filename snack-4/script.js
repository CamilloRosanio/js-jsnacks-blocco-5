const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']


// SOLUZIONE 1
const myAuthors = [];

posts.forEach(post => {
  nameOnly = post.author;
  myAuthors.push(nameOnly);
})

console.log('FOR EACH');
console.log(myAuthors);


// SOLUZIONE 2
const myOtherAuthors = [];

for (let post of posts) {
  myOtherAuthors.push(post.author);
}

console.log('FOR OF');
console.log(myOtherAuthors);


// SOLUZIONE 3
const myNewAuthors = posts.map(item => {
  return item.author
})

console.log('MAP');
console.log(myNewAuthors);