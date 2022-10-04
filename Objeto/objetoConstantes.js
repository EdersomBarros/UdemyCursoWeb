const pessoa = {nome:'João'}
pessoa.nome='Pedro'
console.log(pessoa);

Object.freeze(pessoa) //congelar o objeto

pessoa.nome = 'Maria'
console.log(pessoa.nome);

const pessoaConstante = Object.freeze({nome:'João'})
console.log(pessoaConstante);