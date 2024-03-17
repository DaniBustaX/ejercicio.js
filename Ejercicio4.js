//Cree una función que reciba 3 argumentos numéricos y retorne el numero más
//alto.

function numeroalto(num1,num2,num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(numeroalto(3, 5, 8));
