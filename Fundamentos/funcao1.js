//funcao sem retorno
function imprimirSoma(a,b) {
    console.log(a+b);
}

imprimirSoma(2,3)
imprimirSoma(2)

//#region Funcao com retorno
function soma(a,b =1){
    return a + b
}

console.log(soma(2,29));
console.log(soma(2));

//#endregion