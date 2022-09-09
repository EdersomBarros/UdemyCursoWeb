/*Closure é o escopo criado quando você defini sua função
declarada.
e esse ecopo permite a função acessar e manipular variáveis externas à
função.*/
const x = 'Global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao());