const numeros =[1,2,3,4,5,6,7,8,9,10];

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        i++;
        continue;
    }

    console.log(numero);
    
    if (numero === 8) {
        console.log('8 é magico, saindo...');
        i++;
        break;
    }
    
    i++;
}