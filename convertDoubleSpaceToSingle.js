/*Dada una cadena, convertDoubleSpaceToSingle devuelve la cadena pasada en 
cadena con todos los espacios dobles convertidos a espacios simples.

Ejemplo de entrada:

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
*/

const convertDoubleSpaceToSingle = ((string) => {
    let endStr = string.split(" ").join(" "); 
    return endStr;
});


