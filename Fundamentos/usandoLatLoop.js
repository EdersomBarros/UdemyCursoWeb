/*for (let i = 0; i < 10; i++) {
    console.log(i);
    
}

console.log("i = " + i);*/

//#region usando var em loop #2
const funcs = []

for (var i = 0; i < 10; i++) {

    funcs.push(function () {//adicionar um novo elemento no array
      
        console.log(i);


    }) 

}
funcs[2]()
funcs[8]()


//#endregion