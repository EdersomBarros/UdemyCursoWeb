const funcs = []

for (let i = 0; i < 10; i++) {

    funcs.push(function () {//adicionar um novo elemento no array
      
        console.log(i);


    }) 

}
funcs[2]()
funcs[6]()
funcs[8]()