/**
 * El bucle infinito
 *
 * El siguiente bucle 'while', no acaba nunca. ¿Por qué? Razona la respuesta.
 * Es infinito porque no está modificando el valor de i, es decir que siempre comprueba que i (0) es menor que n (10)
 * 
 * Arreglalo para que la palabra "Ejecutar!" se muestre 10 veces por el terminal
 */

let n=10;
let i=0;

while(i<n) {
    console.log("Ejecutar!")
    i++;
}

