function funl(){}

//armazenar em uma variacel
const fun2 = function(){}

const array = [function(a,b){return a+b},funl,fun2]
console.log(array[0](2,3));

//armazenar em um atributo de projeto
const obj ={}
obj.falar = function(){return 'opa'}
console.log(obj.falar());
//passar função como param
function run(fun){
    fun()
}
run(function(){console.log('Executando...');})
// função pode retornar/conter uma função
function soma(a,b){
    return function (c){
        console.log(a+b+c);
    }
}
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)