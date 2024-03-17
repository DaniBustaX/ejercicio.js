// Dado un array de números, utilice el método map para obtener un nuevo array
// donde cada elemento sea el cuadrado del elemento original. Luego, utiliza el
// método filter para obtener otro array que solo contenga los números pares del
// array original

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const cuadrados = numeros.map((num) => num * num);
console.log(cuadrados); 

const pares = cuadrados.filter((num) => num % 2 === 0);
console.log(pares);