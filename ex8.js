/**
 * Bucles while
 *
 * Modifica el bucle while para que escriba por el terminal 
 * escriba 5 veces exactamente "Ejecuto!". Actualmente lo escribe 6 veces. Porque?
 * Porque estaba comprobando si i era menor o igual a 5, eso da true la cantidad de veces (5) + el 0 inicial
 * 
 * Reestricción: NO puedes cambiar el valor de las variables 'veces' ni 'i' !!
 */

let veces = 5
let i = 0

while (i<veces) {
    console.log("Ejecuto!")
    i++
}

/**
 * Pregunta BONUS: 
 * 
 * 
 * - ¿Qué valor BOLEANO toma la expresión i<=veces LA PRIMERA vez que se evalua?
 * - ¿Cuales son los primeros valores de 'i' y de 'veces' la expresión 'i<=veces' vale false ?
 */