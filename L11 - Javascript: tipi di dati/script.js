/**
 * Javascript: tipi di dati
 * 
 * Lista tipi di dati:
 * 
 * - string
 * - number
 * - boolean
 * - null (in realtà è di tipo "object")
 * - undefined
 */

// Stringhe
let nome = "Michele";
let cognome = 'Mincone';

// Numeri (comprende anche il decimale)
// NOTA: non esiste un tipo di dato indipendente per i numeri decimali
let numeroIntero = 50;
let numeroDecimale = 3.14;

// Booleani (true | false)
let valoreVero = true;
let valoreFalso = false;

// Valore nullo
let valoreNullo = null;

// Tipo non definito -> "undefined"
let somma;

console.log(typeof nome);
console.log(typeof numeroIntero);
console.log(typeof numeroDecimale);
console.log(typeof valoreVero);
console.log(typeof valoreNullo);
console.log(typeof somma);
