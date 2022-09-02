// par nome/valor

const saudacao = 'Opa' // contexto léxico

function exerc(){
    const saudacao = 'falaaaa'
    return saudacao
}
//objetos são grupos anunhados de pares

const Cliente={
    nome: 'Pedro',
    idade:32,
    peso:90,
    endereco:{
        logradouro: "Avenida Afonso Pena",
        numero: 123
    }
}
console.log(saudacao);
console.log(exerc());
console.log(Cliente);