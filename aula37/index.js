// for classico - geralemnte com arrays ou strings - iteráveis
// for in - retorna o indice ou chave (string, array ou objetos)
// for of - retorna o valor em si (iteráveis, arrays ou strings)

const jogador = {
    nome: 'Messi',
    idade: 33,
    time: 'Barcelona'
}

for (let chave in jogador) {
    console.log(chave, jogador[chave]);
}

//for (let valor of jogador) {
//    console.log(valor);
//} // TypeError: jogador is not iterable
