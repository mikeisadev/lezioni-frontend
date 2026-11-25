/**
 * Array
 */
const libri = [
    "libro 1", 
    "libro 2", 
    "libro 3",
    "libro 4",
    "libro 5"
];

const macchine = ["BMW", "Ford", "Peugeot", "Citroen"];

const numeri = [1, 2, 3, 4, 5, 6];

const valoriMisti = [true, null, "ciao", 44, 3.14];

// Metodi per array
libri.pop();
libri.unshift();

console.log(libri);

libri[0] = "L'uomo che scambiò sua moglie per un cappello - Oliver Sacks";

console.log(libri);

console.log(libri[0]);
console.log(libri[1]);
console.log("In libreria ci sono: " + libri.length + " libri");

// Foreach su array
libri.forEach(function(libro) {
    console.log(libro);
});

libri.map(function(libro) {
    console.log(libro);
});

for (const indice in libri) {
    console.log(indice, libri[indice]);
}