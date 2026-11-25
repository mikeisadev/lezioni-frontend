/**
 * Javascript - Funzioni
 * 
 * Tipi di funzioni: 
 * - Funzioni normali / standard
 * - Funzioni espressioni
 * 
 * Cos'è una funzione:
 * Un blocco di codice riutilizzabile
 */

// Funzione standard
function somma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("A e B devono essere numeri");
    }

    return a + b;
}

console.log( somma(10, 20) );

// Funzione espressione equivalente
// Unione di costante e funzione anonima
const somma2 = function(a, b) {
    console.log(a + b);
}
somma2(20, 20);

// Funzione espressione arrow
const somma3 = (a, b) => {
    return a + b
}
console.log( somma3(20, 40) );

// Funzione espressione arrow compatta
const somma4 = (a, b) => a + b;
console.log(somma4(30, 40));
