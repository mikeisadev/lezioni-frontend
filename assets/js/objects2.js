window.addEventListener("DOMContentLoaded", () => {
    /**
     * Definire delle strutture dati: array di oggetti
     * 
     * Bonus: puoi definire più costanti, più array di oggetti
     * per stabilire delle relazioni
     */

    // 2. Console log / console table di ogni oggetto
    console.log(dipendenti);

    // 3. Trovare la relazione tramite cicli annidati
    dipendenti.forEach(dipendente => {
        contratti.forEach(contratto => {
            if (dipendente.contrattoId == contratto.id) {
                console.log(dipendente, contratto);
            }
        })
    })

    // 4. Stampare nella pagina HTML (DOM) le collezioni
    function generateEmployeeList() {
        const boxDipendenti = document.querySelector("#employees_list");

        console.log(boxDipendenti);

        dipendenti.forEach(dipendente => {
            boxDipendenti.innerHTML += `
                <article class="employee-card">
                    <img src="${dipendente.avatarUrl}">
                    <h3>${dipendente.nome} ${dipendente.cognome}</h3>
                    <p>ID: ${dipendente.id}</p>
                </article>
            `;
        });
    }
    generateEmployeeList() 

});