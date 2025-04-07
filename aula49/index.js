//declarar função
//function hoisting
function OI() {
    console.log("Oi, tudo bem?")
}

//declarar função dentro de uma variável chamada de Function Expression
const DecDentroConst = function() {
    console.log("Oi, tudo bem?")
}
DecDentroConst();


//declarar função com arrow function
const ArrowFunction = () => {
    console.log("Oi, tudo bem?")
} 
ArrowFunction();

//declarar função dentri de de um objeto
const obj = {
    funcao: function() {
        console.log("Oi, tudo bem?")
    }
}
obj.funcao();