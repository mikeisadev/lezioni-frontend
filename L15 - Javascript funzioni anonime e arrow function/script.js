/**
 * FUNZIONI ANONIME
 * 
 * Sono funzioni che non hanno
 * nome e vengono richiamate
 * in uno specifico momento
 * da altre funzioni o da 
 * specifici blocchi di codice.
 */

setTimeout(
    // funzione di callback (è una funzione anonima)
    function() {
        // alert("Popup di avviso")
    },
    5000
);

setInterval(
    () => console.log("Avviso ogni due secondi!!!"),
    2000
);

/**
 * FUNZIONI ESPRESSIONI
 * 
 * Le "funzioni espressioni" sono funzioni dichiarate
 * all'interno di una costante.
 */
const somma = function(a, b) {
    return a + b;
}

console.log( somma(10, 10) );

/**
 * ARROW FUNCTION o "FUNZIONI A FRECCIA"
 * 
 * Le arrow function sono di due tipi:
 * - con il corpo (con le parentesi graffe)
 * - senza corpo -> funzioni a una riga
 */
const sommaArrow = (a, b) => {
    return a + b;
}

const sommaOneline = (a, b) => a + b;
