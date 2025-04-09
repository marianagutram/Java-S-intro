
let frutas = ['manzana', 'naranja', 'plátano', 'kiwi', 'plátano', 'naranja', 'naranja', 'kiwi'];  /* cada elemento o fruta tiene un indice, 
los cuales son numeros enteros que representancla posicion dentro de un array
frutas [0] corresponde a manzana
frutas [1] corresponde a naranja
frutas [2] corresponde a platano
frutas [3] corresponde a kiwi */

let numFrutas ={}; /* Está creando un objeto vacío que se usará más adelante
 para guardar cuántas veces aparece cada fruta en el arreglo. */

for (let i=0; i<frutas.length; i++){
    let ubi=frutas[i];
    if (numFrutas[ubi]){ /* el IF pregunta su la fruta ya se encuentra en el objeto numFrutas, si sí, se le suma uno */
        numFrutas[ubi]++;

    }else {           /* si no existe, se le otorga el valor de 1 */
        numFrutas[ubi]=1;
    }
}

console.log(numFrutas);