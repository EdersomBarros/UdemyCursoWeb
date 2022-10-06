Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
       
       newArray.push(callback(this[i], i, this))
        
    }
    return newArray

}


const carrinho = [
    '{ "nome": "Borracha", "preco": 9.4}',
    '{ "nome": "Caderno", "preco": 13.96}',
    '{ "nome": "Lápis", "preco": 3.50}',
    '{ "nome": "Caneta", "preco": 7.55}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 


const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado);
