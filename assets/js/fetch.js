/**
 * Chiamate di rete - Javascript
 * 
 * Le chiamate di rete, a prescindere dal tipo di libreria usata, si basano su:
 * - HTTP (HyperText Transfer Protocol) è un protocollo di rete basato TCP/IP
 * - HTTPS = SSL e/o TLS (Layer di sicurezza) + TCP/IP (Layer dei dati)
 * 
 * Come si fanno le chiamate di rete in Javascript? 
 * In javascript esistono varie librerie per eseguire chiamate di rete, tra cui:
 * - Fetch API -> fetch("IP/URL")
 * - XMLHttpRequest API -> complesso da implementare (vedi documentazione)
 * - axios -> la useremo in React -> axios.get(), axios.post(), axios.delete(), axios.put(), axios.patch()
 * 
 * Un'altra libreria equivalente (storica) è "curl" e viene usata spesso da terminale.
 * 
 * Parlando di interfacce grafiche abbiamo Postman e Insomnia come software grafici per effettuate richieste HTTP e testare
 * endpoint REST API e microservizi.
 * 
 * HTTP ci consente di manipolare le risorse di un server tramite i "metodi":
 * - GET      ---> Ottenere/leggere una risorsa
 * - POST     ---> Creare una risorsa
 * - DELETE   ---> Eliminare una risorsa
 * - PUT      ---> Aggiornare l'intera risorsa
 * - PATCH    ---> Aggiornare parzialmente la risorsa
 * 
 * Nota bene: puoi analizzare le singole chiamate di rete attraverso lo "strumento per sviluppatori > network".
 * 
 * Utilizzo: HTTP lo uso per comunicare con i vari backend. Lo useremo per far comunicare il frontend (scritto in Javascript puro
 * o in React) con un backend (Java + Spring Boot).
 * 
 * Altri protocolli da conoscere per ora:
 * - SMTP -> email
 * - FTP (SFTP) -> blob / file
 */

// curl.exe 

// 1. Prima chiamata di rete
fetch('https://dummyjson.com/test')

fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(response => {
        const allRecipes = response.recipes;
        const recipesBox = document.querySelector('#recipes_list');

        allRecipes.forEach(recipe => {
            console.log(recipe.name);

            recipesBox.innerHTML += "<h2>" + recipe.name + "</h2>"
        })
    });

fetch('https://dummyjson.com/users')