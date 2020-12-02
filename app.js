var name = "Camino";

let lastname = "azul";

// la diferncia tranaja sobre coversiones locales y globales

if(name){
    let lastname="rojo";
    var name = "Salto";
    console.log(name); // imprimira Salto
    console.log(lastname); // imprimira rojo
}

console.log(name);// Imprimira Salto
console.log(lastname); // Imprimira azul

/* convenciones de definición de variables
camelCase: las variables se definen con la primera letra minúscula y una nueva palabra incia con mayúscula

PascalCase: las variables se definen con la primera letra mayúscula y una nueva palabra incia con mayúscula

kabab-case: las variables se definen con la primera letra minúscula se separa por un guión y una nueva palabra incia con mayúscula

snake_case: las variables se definen con la primera letra minúscula se separa por un gión bajo y una nueva palabra incia con mayúscula

*/

