console.log(Math.ceil(6,1));

const obj1 ={}
obj1.nome = 'Bola'
console.log(obj1);

function Obj(nome){
    this.nome = nome
    this.exerc = function () {
        console.log('Exerc....');
        
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exerc()