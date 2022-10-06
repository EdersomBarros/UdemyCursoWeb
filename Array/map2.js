const carrinho = [
    '{ "nome": "Borracha", "preco": 9.4}',
    '{ "nome": "Caderno", "preco": 13.96}',
    '{ "nome": "Lápis", "preco": 3.50}',
    '{ "nome": "Caneta", "preco": 7.55}'
]
// Retorne um array apenas com os preços

//#region region 1 passo
// - json.parse para transformar as strings em objetos 
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

//#endregion

//#region 2 passo
// vai receber um objeto como entrada e vai retornar apenas o preço
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado);
//#endregion