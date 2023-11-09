let arrayGenerato = [];
let digit;
let casualNumOnPage = document.getElementById("innerNum")

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

//genero dei numeri casuali sfruttando la funzione e li pusho in un array vuoto (arrayGenerato)
for (let i = 1; i <= 5; i++) {
    let numeriCasuali = getRndInteger(1, 100);
    console.log("i nel for" + i)
    arrayGenerato.push(numeriCasuali)
    console.log(arrayGenerato)
}

casualNumOnPage.innerHTML= arrayGenerato;

function myFunction(){
    casualNumOnPage.classList.add("hid")
    console.log(arrayGenerato);
}
let punteggio = 0
const timer = setTimeout(myFunction,  30 * 1000);
function otherTimeOut (){
    for (i = 1; i <=5; i++){
        digit = parseInt(prompt("inserisci i FUCKING numeri"))
        
    if (arrayGenerato.includes(digit)){
        
        punteggio ++;


    }
    else {
        alert("You suck, try again ")
        break;
    }

    }
    if (punteggio==5){
        alert("FLAWLESS VICTORY!")
    }

}
const secondTimer = setTimeout(otherTimeOut,  30 * 1000);













// const inserisciNum = parseInt(prompt("inserici i fucking numeri"))