/**
 * Ejercicio 5: El siguiente bucle no se ejecuta nunca. 
 * Comrpruébalo con "node ex5.js"
 * ¿Sabrías decir porque?
 * 
 * No se ejecuta porque i tiene el mismo valor que veces, por lo tanto el bucle da por resultado false (5 no es menor que 5)
 * 
 * Una vez lo averigues, arreglalo para que el bucle se ejecute exactamente 10 veces.  * Reestricción: SOLO puedes cambiar el valor de la variable 'veces' para conseguirlo
 */

 let veces = 15;

 for (let i=5; i<veces; i++) {
     console.log("No me voy a ejecutar..." + i)
 }