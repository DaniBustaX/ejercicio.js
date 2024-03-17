// Crear una función que devuelva el promedio de un arreglo, en caso de que el
// arreglo esté vacío debe devolver cero.

function CalcularPromedio(numeros) {
    if (numeros.length === 0) {  
        return 0;
    }
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}

const promedio = CalcularPromedio([4, 1, 6, 8, 5]);
console.log(promedio);

const promedio2 = CalcularPromedio([]);
console.log(promedio2);