// Crear una función que reciba un arreglo como parámetro y devuelva una copia del
// arreglo (este debe ser una copia integra y no solo una referencia al arreglo
// original)

function copiarArreglo(arreglo) {
    return [...arreglo];
}

const arregloOriginal = [1, 2, 3, 4, 5];

const copiaArreglo = copiarArreglo(arregloOriginal);

console.log('Arreglo original:', arregloOriginal);
console.log('Copia del arreglo:', copiaArreglo);

