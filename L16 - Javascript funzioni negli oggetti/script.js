/**
 * FUNZIONI NEGLI OGGETTI
 * 
 * Dentro gli oggetti in Javascript, posso definire delle funzioni
 * per eseguire istruzioni legate all'oggetto stesso.
 */

const triangolo = {
    base: 20,
    altezza: 26,
    colore: "blue",

    area: function() {
        return (this.base * this.altezza) / 2;
    },

    presentazione: function() {
        return "Questo triangolo ha una base di " +
               this.base + " cm" + ", poi ha un'altezza di " +
               this.altezza + " cm e un'area di " + ((this.altezza * this.base) / 2)
               + " cm";
    },

    presentazione2: function() {
        return `Questo triangolo ha una base di ${this.base} cm, ha un'altezza di ${this.altezza} cm e un'area di ${(this.base * this.altezza) / 2} cm`
    }
}

// MACOS: option + 9
// Windows: Alt + 96

console.log( triangolo );

console.log( triangolo.area() );
console.log( triangolo.presentazione() );
console.log( triangolo.presentazione2() );

// const cerchio = {
//     circonferenza: 25,
//     raggio: 9
// }

// const quadrato = {
//     lato: 15
// }