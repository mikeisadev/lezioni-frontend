/**
 * Javascript: array
 * 
 * Gli array sono liste (o collezioni)
 * di valori.
 * 
 * In javascript NON devo dichiarare
 * il tipo di dato.
 * 
 * Per definire un array dichiaro una variabile
 * e poi uso le parentesi quadre.
 */
const listaNomi = ["Michele", "Alessandro", "Francesco", "Giacomo"];

// listaNomi = "stringa"; // ERRORE! Non posso riassegnare valori a CONST

console.log(listaNomi);
console.log("Primo nome: ", listaNomi[0]);
console.log("Secondo nome: ", listaNomi[1]);

// Aggiungiamo due nomi alla fine della lista dei nomi
// NOTA: posso mutare il valore di const quando ho un array
listaNomi.push("Andrea");
listaNomi.push("Gaetano");

// Aggiungiamo due nomi all'inizio della lista dei nomi
listaNomi.unshift("Filippo");
listaNomi.unshift("Jacopo");

console.log(listaNomi);

const listaNumeri = [10, 20, 30, 40, 50];

console.log(listaNumeri);

const listaValori = [true, "Stringa", 56, 1.2, "Ciao", null];

console.log(listaValori);