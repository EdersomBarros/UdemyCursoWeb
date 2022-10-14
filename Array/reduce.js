//#region método reduce()
/* método reduce() executa uma função reducer 
(fornecida por você) para cada elemento do array,
 resultando num único valor de retorno.
 A função reducer recebe quatro parâmetros:
 Acumulador (acc)
 Valor Atual (cur)
 Index Atual (idx)
 Array original (src) */
//#endregion
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 5.3, bolsista: false },
    { nome: 'Antônio', nota: 8.9, bolsista: true }
]
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador,atual);
    return acumulador + atual
},10)
console.log(resultado);






