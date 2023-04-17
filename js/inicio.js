let ingresarNombre = prompt("Ingresa tu nombre: ");
alert("hola " + ingresarNombre + "" +", " + "Debes ejecutar en la consola js: \n preguntarPrecios()");


let valor = ""
const mensajeDeBienvenida = "Ingrese el código de la planta que desea comprar: \n " +
                            "a) auto-cinderella-jack \n" +
                            "b) auto-lemon-kix \n" + 
                            "c) auto-orange-bud \n" +
                            "d) auto-skywalker-haze \n"


function preguntarPrecios() {
    let selection = prompt(mensajeDeBienvenida).toLowerCase()


    if (selection !== "a" && selection !== "b" && selection !== "c" && selection !== "d")
     { 
      alert ("debes ingresar un código valido")
    }

    else{

    
    switch (selection) {
        case "a":
            valor = "auto cinderella jack cuesta $10000"
            break
        case "b":
            valor = "auto lemon kix cuesta $11000"
            break
        case "c":
            valor = "auto orange bud cuesta $12000"
            break
        case "d":
            valor = "auto skywalker haze cuesta $13000"
            break
        default:
        }
        alert(valor)
    }   
    const respuesta = confirm("Quieres saber el precio de otra planta?")


    while(respuesta) {
        preguntarPrecios()

    }


}