Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i=0; i < this.length; i++){

        if(callback(this[i], i, this)){ //callback é invocado com estes três argumentos: o valor do elemento, o índice do elemento, o objeto do array a ser preenchido
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    {nome: 'Notbook', preco: 2499, fragil: true},
    {nome: 'ipad Pro', preco: 4199, fragil: true},
    {nome: 'Corpo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil));