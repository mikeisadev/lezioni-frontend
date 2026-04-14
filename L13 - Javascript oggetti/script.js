/**
 * Javascript oggetti.
 * 
 * Definire un oggetto dentro una variabile con
 * le parentesi graffe.
 */
const oggetto = {
    nome: "telefono",
    peso: 300,
    unitaMisuraPeso: "g",
    listaFunzionalità: [
        "5G",
        "4G+",
        "4G LTE",
        "Giroscopio",
        "Bussola",
        "GPS",
        "Raffreddamento istantaneo"
    ],
    jackAudio: false,
    fotocameraAnteriore: false,
}

// Console log dell'oggetto
console.log(oggetto);

// Accedo alle singole proprietà dell'oggetto
console.log(oggetto.peso);
console.log(oggetto["jackAudio"]);

// Sovrascrivere proprietà già esistenti dell'oggetto
oggetto.nome = "tablet";

// Aggiungo una nuova proprietà (o coppia chiave-valore)
// all'oggetto
oggetto.informazoniGenerali = "Aggiornamento 04/2026 | Bug fixing, aggiornamento sicurezza";

console.log(oggetto);

/**
 * Metodi principali per lavorare con gli oggetti.
 * 
 * - Object.keys -> ottenere le chiavi di un oggetto
 * - Object.values -> ottenere i valori di un oggetto
 * - Object.entries -> ottenere la coppia chiave-valore di un oggetto
 */

console.log(
    Object.keys(oggetto)
)

console.log(
    Object.values(oggetto)
)

console.log(
    Object.entries(oggetto)
)