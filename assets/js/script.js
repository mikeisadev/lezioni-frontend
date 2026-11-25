// Commento singola linea

/**
 * Variabili:
 * - var (vecchio)
 * 
 * - let (variabile - SOVRASCRIVIBILE)
 * - const (costante - NON SOVRASCRIVIBILE)
 */
let nome = "Michele";
let cognome = "Mincone";

nome = "Francesco";

console.log("Ciao! " + nome + " " + cognome);

console.log(nome, cognome);

console.log(nome);
console.log(cognome);

/**
 * COSTANTI -> const
 * 
 * Per proteggere valori che sono costanti e 
 * che non devono cambiare
 */
const PI = 3.14;
const IVA4 = 0.04;
const IVA10 = 0.10;
const IVA22 = 0.22;

console.log(PI, IVA4, IVA10, IVA22);

/**
 * Tipi di dati
 */
const stringhe = "Io sono una stringa";
const numeroIntero = 1000;
const numeroDecimale = 7.19;
const valoreVero = true;
const valoreFalso = false;
const assenzaValore = null;
const assenzaReferenza = undefined;

console.log(typeof stringhe);
console.log(typeof numeroIntero);
console.log(typeof numeroDecimale);
console.log(typeof valoreVero);
console.log(typeof valoreFalso);
console.log(typeof assenzaValore);
console.log(typeof assenzaReferenza);