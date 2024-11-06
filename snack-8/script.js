const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// Siccome il mio Array contiene Objects, il risultato del FIND è un Object quindi mi basta richiamare la sua proprietà subito dopo le parentesi
const mySearchKey = 'Marco Lanci';

const myClass = (students.find(item => item.name == mySearchKey)).class;

console.log('FIND');
console.log(myClass);