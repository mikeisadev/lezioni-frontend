/**
 * Javascript: funzioni
 * 
 * La funzione è un blocco di codice riutilizzabile. 
 * 
 * Ogni funzione al suo interno ha una o più istruzioni per
 * svolgere un determinato compito.
 */

// Definisco la funzione "somma"
function somma(variabile1, variabile2) {
    console.log(
        variabile1 + variabile2
    );
}

// Chiamo la funzione "somma"
somma(100, 100);

/**
 * FUNZIONI DI RITORNO
 */
function sottrazione(a, b) {
    return a - b;
}

const risultato = sottrazione(50, 10);

console.log( risultato );

/**
 * ESERCIZIO SVOLTO - 1
 * 
 * Crea una funzione che richiede nome e cognome a un
 * utente e poi stampa nella console la presentazione.
 * 
 * - [x] Calcolo età
 * - [x] Dire se l'utente è maggiorenne o meno
 */
function presentaUtente() {
    const nome = prompt("Dimmi il tuo nome");
    const cognome = prompt("Dimmi il tuo cognome");

    const annoDiNascita = prompt("Dimmi la tua data di nascita");
    const eta = (new Date()).getFullYear() - annoDiNascita;

    if (eta >= 18) {
        console.log(
            "Ciao " + nome + " " + cognome + 
            ", ho calcolato che hai " + eta + " anni." +
            "Per cui sei maggiorenne"
        );
    } else {
        console.log(
            "Ciao " + nome + " " + cognome + 
            ", ho calcolato che hai " + eta + " anni." +
            "Per cui sei MINORENNE!!!"
        );
    }
}

// presentaUtente();

/**
 * ESERCIZIO SVOLTO 2
 * 
 * Calcolare i gradi farenheit avendo quelli celsius in input
 */
function daCelsiusAFarenheit(gradiCelsius) {
    return (gradiCelsius * 9/5) + 32
}

function daFarenheitACelsius(gradiFarenheit) {
    return (gradiFarenheit - 32) * 5/9
}

const t1 = daCelsiusAFarenheit(30);
const t2 = daCelsiusAFarenheit(30);

console.log( daFarenheitACelsius(68) )

/**
 * ESERCIZIO SVOLTO 3
 * 
 * - Da celsius a kelvin
 * - da kelvin a celsius
 */
const kelvinConv = 273.15;

function daCelsiusAKelvin(gradiCelsius) {
    return gradiCelsius + kelvinConv;
}

const tk1 = daCelsiusAKelvin(20);

console.log(tk1);

function daKelvinACelsius(gradiKelvin) {
    return gradiKelvin - kelvinConv;
}

console.log( daKelvinACelsius(600) );