/**
 * Javascript - Oggetti
 * 
 * Si tratta di una struttura dati (ovvero un modo per rappresentare i dati in modo strutturato)
 * organizzata in coppie chiave-valore.
 * 
 * Gli oggetti vengono usati per descrivere una qualsiasi entità.
 */
const velocityMeasure = "km/h";

const macchina = {
    numeroRuote: 4,
    tipo_motore: "benzina",
    tipo_aspirazione: "turbo",
    accessori: [
        "Spoiler",
        "Sticker",
        "Turbo"
    ],
    v_max: 300,
    v_min: 0,
    n_posti: 5,
    presentazione() {
        return "Questa macchina è una " + this.marca
                + ", ha " + this.n_posti + " posti e ha"
                + " un motore " + this.tipo_motore + " " 
                + this.tipo_aspirazione;
    }
}

// ERRORE!
// macchina = null;

// Aggiorno
macchina.tipo_aspirazione = "aspirato";
macchina.accessori.push("Condizionatore");

// Aggiungere
macchina.marca = "BMW";
macchina.accessori = true;

// Eliminare
delete macchina.numeroRuote;

// Visualizzazione
console.log("Numero ruote:", macchina.numeroRuote);
console.log("Accessori:", macchina.accessori);
console.log("Velocità massima:", macchina["v_max"] + " " + velocityMeasure);
console.log("Numero posti", macchina["n_posti"]);

console.table(macchina);

console.log(macchina.presentazione());