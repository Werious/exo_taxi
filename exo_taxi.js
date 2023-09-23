"use strict";

let name = "John";
let sante = 10;
let musiques = ["Tutut1", "Tutut2", "Tutut3", "Tutut4", "Anyssa - Wejdene"];

for(let i=29;i>=0;i--){
    if(i>0){
        let musique = musiques[Math.floor(Math.random() * musiques.length)]
        if(musique=="Anyssa - Wejdene"){sante--;}
        console.log(`Il reste ${i} feu(x), la musique jouée est ${musique}.`)
        if(sante==0){
        console.log("* EXPLOSTION DE JOHN *")
        break;
        }
    } else {
        console.log(`Je suis bien arrivé ! Il m'a fallut ${10 - sante} changement de taxi pour y arriver.`)
    }
}
