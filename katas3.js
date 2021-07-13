const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


function showResults(n){
    const bodyResult= document.getElementById('body');
    const divResult = document.createElement("div");
    const newResult = document.createTextNode(n);
    divResult.appendChild(newResult);
    bodyResult.appendChild(divResult);
}
function kata1() {
    // implemente o código do kata 1 aqui
    // Exibir os números de 1 a 25: (1, 2, 3, …, 24, 25)
    let meuRetorno = [1]
    for (let i = 2; i<=25; i++){
        meuRetorno= meuRetorno + ", " + i
        }   
    showResults(meuRetorno)
    return meuRetorno
}
kata1()

function kata2() {
    // implemente o código do kata 2 aqui
    // Exibir os números de 25 a 1: (25, 24, 23, …, 2, 1)
    let meuRetorno = [25]
    for (let i = 24; i>=1; i--){
        meuRetorno= meuRetorno + ", " + i
        }   
    showResults(meuRetorno)
    return meuRetorno
}
kata2()


function kata3() {
    // implemente o código do kata 3 aqui
    // Exibir os números de -1 a -25: (-1, -2, -3, …, -24, -25)
    let meuRetorno = [-1]
    for (let i = -2; i>=-25; i--){
        meuRetorno= meuRetorno + ", "  + i
        }   
    showResults(meuRetorno)
    return meuRetorno
}
kata3()

function kata4() {
    // implemente o código do kata 4 aqui
    //Exibir os números de -25 a -1: (-25, -24, -23, …, -2, -1)
    let meuRetorno = [-25]
    for (let i = -24; i<=-1; i++){
        meuRetorno= meuRetorno + ", " + i
        }   
    showResults(meuRetorno)
    return meuRetorno
}
kata4()

function kata5() {
    // implemente o código do kata 5 aqui
    // Exibir os números ímpares de 25 a -25: (25, 23, 21, …, -23, -25)
    let meuRetorno = [25]
    for (let i = 23; i>=-25; i=i-2){
        meuRetorno= meuRetorno + ", " + i
        }   
    showResults(meuRetorno)
    return meuRetorno
}
kata5()

function kata6() {
    // implemente o código do kata 6 aqui
    // Exibir os números divisíveis por 3 até o 100: (3, 6, 9, …, 96, 99)
    let meuRetorno = [3]
    for (let i = 6; i<=100; i=i+3){
        meuRetorno= meuRetorno + ", " + i
        }   
    showResults(meuRetorno)
    return meuRetorno
}
kata6()

function kata7() {
    // implemente o código do kata 7 aqui
    // Exibir os números divisíveis por 7 até o 100: (7, 14, 21, …, 91, 98)
    let meuRetorno = [7]
    for (let i = 14; i<=100; i=i+7){
        meuRetorno= meuRetorno + ", " + i
        }   
    showResults(meuRetorno);
    return meuRetorno
}
kata7()

function kata8() {
    // implemente o código do kata 8 aqui
    // Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100: (99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)
    let meuRetorno = [99]
    for (let i = 98; i>0; i--){
        if ((i%7===0) && (i%3===0)){
            meuRetorno= meuRetorno + ", " + i
        }
        else if (i%3===0){
            meuRetorno= meuRetorno + ", " + i
        }   
        else if (i%7===0){
            meuRetorno= meuRetorno + ", " + i
        }
    }
    showResults(meuRetorno)
    return meuRetorno
    
}
kata8()

function kata9() {
    // implemente o código do kata 9 aqui
    //  Exibir os números ímpares divisíveis por 5 até o 100: (5, 15, 25, …, 85, 95)
    let meuRetorno=[5]
    for (let i = 10; i<=95;i=i+5){
        if(i%2!==0){
            meuRetorno= meuRetorno + ", " + i
        }
    }
    showResults(meuRetorno)
    return meuRetorno
}
kata9()

function kata10() {
    // implemente o código do kata 10 aqui
    // Exibir os 20 elementos de sampleArray. (469, 755, 244, …, 940, 472)
    showResults(sampleArray)
    return sampleArray
}
kata10()

function kata11() {
    // implemente o código do kata 11 aqui
    // Exibir todos os números pares contidos em sampleArray. (244, 758, 450, …, 940, 472)
    let meuRetorno=[]
    for(let i=0; i<sampleArray.length; i++){
        if (sampleArray[i]%2===0){
            meuRetorno.push(" "+sampleArray[i])
        }
    }
    showResults(meuRetorno)
    return meuRetorno
}
kata11()

function kata12() {
    // implemente o código do kata 12 aqui
    // Exibir todos os números ímpares contidos em sampleArray. (469, 755, 245, …, 179, 535)
    let meuRetorno=[]
    for(let i=0; i<sampleArray.length; i++){
        if (sampleArray[i]%2!==0){
            meuRetorno.push(" "+sampleArray[i])
        }
    }
    showResults(meuRetorno)
    return meuRetorno
}
kata12()

function kata13() {
    // implemente o código do kata 13 aqui
    // Exibir os números divisíveis por 8 em sampleArray: (712, 456, …, 472)
    let meuRetorno=[]
    for(let i=0; i<sampleArray.length; i++){
        if (sampleArray[i]%8===0){
            meuRetorno.push(" "+sampleArray[i])
        }
    }
    showResults(meuRetorno)
    return meuRetorno
}
kata13()


function kata14() {
    // implemente o código do kata 14 aqui
    // Exibir o quadrado de cada elemento de sampleArray. (219961, 570025, …, 222784)
    let meuRetorno=[]
    for(let i=0; i<sampleArray.length; i++){
        pot=sampleArray[i]**2
        meuRetorno.push(" " + pot)
        }
        showResults(meuRetorno)
        return meuRetorno
}
kata14()

function kata15() {
    // implemente o código do kata 15 aqui
    // Exibir a soma de todos os números de 1 a 20.
    let meuRetorno=0
    for (let i = 0; i <= 20; i++) {
        meuRetorno += i;
    }
    showResults(meuRetorno)
    return meuRetorno
}
kata15()

function kata16() {
    // implemente o código do kata 16 aqui
    // Exibir a soma de todos os elementos de sampleArray.
    let meuRetorno=0
    for (let i = 0; i < sampleArray.length; i++) {
        meuRetorno += sampleArray[i];
    }
    showResults(meuRetorno)
    return meuRetorno
}
kata16()

function kata17() {
    // implemente o código do kata 17 aqui
    // Exibir o menor elemento de sampleArray.
    let meuRetorno=sampleArray[0]
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i]<meuRetorno){
            meuRetorno = sampleArray[i]
        }
    }
    showResults(meuRetorno)
    return meuRetorno
}
kata17()

function kata18() {
    // implemente o código do kata 18 aqui
    // Exibir o maior elemento de sampleArray.
    let meuRetorno=sampleArray[0]
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i]>meuRetorno){
            meuRetorno = sampleArray[i]
        }
    }
    showResults(meuRetorno)
    return meuRetorno
}
kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
    // Exibir 20 retângulos cinza sólido, cada um com 20px de altura e 100px de largura.?
    const bodyResult= document.getElementById('body');

    for (let i = 0; i<20; i++){
        var blocks = document.createElement("div")
        blocks.className= "blocks"
        bodyResult.appendChild(blocks)
        blocks.style.width= 100 +"px"
        blocks.style.height=20 +"px"
        blocks.style.background = "gray"
        blocks.style.margin="1px"
    }
    return
}
kataBonus1()

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
    //Exibir 20 retângulos cinza sólido, cada um com 20px de altura e larguras variando uniformemente de 105px a 200px, com o intervalo de 5px entre cada retangulo.
    const bodyResult= document.getElementById('body');

    for (let i = 0; i<20; i++){
        let blocks = document.createElement("div")
        blocks.className= "blocks"
        bodyResult.appendChild(blocks)
        blocks.style.width= 105 + 5*i +"px"
        blocks.style.height=20 +"px"
        blocks.style.background = "gray"
        blocks.style.margin="1px"
    }
    return
}
kataBonus2()

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
    //Exibir 20 retângulos cinza sólido, cada um com 20px de altura e com larguras em pixels determinadas pelos 20 elementos do sampleArray.
    const bodyResult= document.getElementById('body');

    for (let i = 0; i<20; i++){
        let blocks = document.createElement("div")
        blocks.className= "blocks"
        bodyResult.appendChild(blocks)
        blocks.style.width= sampleArray[i] +"px"
        blocks.style.height=20 +"px"
        blocks.style.background = "gray"
        blocks.style.margin="1px"
    }
    return
}
kataBonus3()

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
    // Como no Item #3, mas alternando cores para que retângulo sim, retângulo não seja vermelho.
    const bodyResult= document.getElementById('body');

    for (let i = 0; i<20; i++){
        let blocks = document.createElement("div")
        blocks.className= "blocks"
        bodyResult.appendChild(blocks)
        blocks.style.width= sampleArray[i] +"px"
        blocks.style.height=20 +"px"
        blocks.style.background = "gray"
        blocks.style.margin="1px"
        if(i%2===0){
            blocks.style.background = "red"
        }
    }
    return
}
kataBonus4()

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
    // Como no Item #3, mas pinte os retângulos de largura par de vermelho.
    const bodyResult= document.getElementById('body');

    for (let i = 0; i<20; i++){
        let blocks = document.createElement("div")
        blocks.className= "blocks"
        bodyResult.appendChild(blocks)
        blocks.style.width= sampleArray[i] +"px"
        blocks.style.height=20 +"px"
        blocks.style.background = "gray"
        blocks.style.margin="1px"
        if(sampleArray[i]%2===0){
            blocks.style.background = "red"
        }
    }
    return
}
kataBonus5()
