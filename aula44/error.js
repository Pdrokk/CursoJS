function soma(a, b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Os argumentos precisam ser números');
    }

    return a + b;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (error) {
    console.log("Houve um erro");
}
