function descon(descon, produto){
    let resul = produto - (produto * descon / 100);
          return resul;
}

function duasOuMais(vezes, produto){
    if(vezes === 2){
        let resulta = produto / vezes;
            console.log(resulta);
                    }
            else {
                let resulta = (produto + (produto * 10 /100)) / 3;
                     console.log(resulta);
                }
}
console.log(descon(10, 200));
duasOuMais(3,150);