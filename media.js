
    const input = require("readline-sync")

    console.log("Tá querendo saber se passou, né?")
    
    const nota1 = input.question("Tirasse quanto no primeiro GQ?")
    const nota2 = input.question("Tirasse quanto no segundo GQ?")
    
    const media1 = (parseFloat(nota1) *2) 
    const media2 = (parseFloat(nota2) *3) 
    const mediaTotal = (media1 + media2)
    
    console.log("Tua média ficou:")
    console.log(mediaTotal.toFixed(2) /5 )



