//FUNCOES
 
function teste(){//criei um funcao com o nome teste que possui um comando
    console.log("oi");
}
teste();

    function sayMyName(name){
        console.log("your name is: ", name);
            }
                sayMyName("karoli");    

                function retorno (numero){
                    let numeros = numero * 100;
                        return numeros;
}//return eh uma instrucao usada sempre q desejo q um valor seja retornado quando uma funcao eh chamada
                         console.log(retorno(400));//um forma de mostrar ao usuario
                           let soma = 20 + retorno(10); // quero somar um numero com a conta ja pronta ja funcao
                            console.log(soma);    


                            //FUNCAO PRINCIPAL
//n preciso necessariamnete utilzar a funcao main como a principal ou usa-la obrigatoriamnete p escrever o codigo 
function main(){
    console.log("funcao main");

}           

//FUNCAO IMEDIATAMENTE INVOCADA
(// essa funcao sem nome sera considerada como a principal (main)
    function (){
        console.log("ola, pexual");
    }
)();
