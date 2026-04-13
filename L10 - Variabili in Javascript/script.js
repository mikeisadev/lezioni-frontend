/**
 * JAVASCRIPT: VARIABILI
 * 
 * VECCHIO: var
 * NUOVI: let e const
 */

// Scriviamo variabili col metodo vecchio
var nomeVariabile = 'Contenuto variabile';
var nomeVariabile = 50;

var nomevariabile = "ciao";

var stringa = "stringa doppio apice";
var numero = 30;

// console.log(nomeVariabile, stringa, numero);

/**
 * Metodi moderni per dichiarare variabili e costanti
 * 
 * LET e CONST
 * 
 * LET: dichiarazione variabili
 * CONST: dichiarazione costanti
 */

// VARIABILE "LET" ("LET" SOSTITUISCE "VAR")
let nome = "Michele";
// let nome = "Alessandro"; // ATTENZIONE! Non puoi ridichiarare la variabile

// Attento le variabili sono CASE-SENTITIVE
// Le variabili qui sotto sono tutte diverse
let NOME = false;
let NoMe = "Alessandro";

console.log(nome);

// Riassegnare valore sulla variabile "nome"
nome = "Francesco";

console.log(nome, NOME, NoMe);

/**
 * COSTANTI: dichiarare costanti con "const"
 */
const pigreco = 3.14;

console.log(pigreco);

// pigreco = 659868952; // ERRORE! Non puoi riassegnare valori alle costanti

console.log(pigreco);