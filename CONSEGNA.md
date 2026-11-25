# ESERCITAZIONE FUNZIONI IN JAVASCRIPT

1) Scrivi da zero la funzione di somma usando la versione standard: 
   ```javascript
   function nomeFunzione() {...}
   ```

2) Riscrivi la funzione in modalità espressione con la funzione anonima 
   ```javascript
   const nomeFunzione = function() {...}
   ```

3) Riscrivi la medesima funzione in modalità arrow
   ```javascript
   const nomeFunzione = () => {...}
   ```

4) Puoi scrivere questa funzione in modalità arrow compatta?
    ```javascript
    const nomeFunzione = () => ...
    ```

5) Scrivi la funzione **sottrazione**, **moltiplicazione** e **divisione** in **tutte le modalità**

6) Se vuoi implementa i controlli dentro le funzioni con `if`. Ad esempio potresti:
    
    6.1) Controllare se i parametri sono numeri:
    ```javascript    
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("A e B devono essere numeri");
    }
    ````
    
    6.2) Nella divisione, controlla la seconda cifra e verifica se è pari a zero 
