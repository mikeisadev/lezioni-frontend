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

// Aggiungo una nuova proprietà (o coppia chiave-valore)
// all'oggetto
oggetto.aggiornamento = "Aggiornamento 04/2026 | Bug fixing, aggiornamento sicurezza";

console.log(oggetto);