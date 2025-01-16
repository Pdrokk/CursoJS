//escreva uma função que recebe 2 numeros e retorna o maior deles

/*function maiorNumero (num1, num2) { //Preimeiro metodo
    if (num1 > num2) {
    return num1;
    } else {
    return num2;
    }
}*/

/*function maiorNumero (num1, num2) {
    return num1 > num2 ? num1 : num2;   //Segundo metodo
}*/

const maiorNumero = (num1, num2) => num1 > num2 ? num1 : num2; //terceiro metodo

console.log(maiorNumero(5, 10)); 