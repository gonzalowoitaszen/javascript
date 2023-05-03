const ingresarNombre = prompt("Ingresa tu nombre: ");
alert("hola " + ingresarNombre);

preguntarPrecios()

function preguntarPrecios() {
let valor = ""
const mensajeDeBienvenida = "Ingrese el código de la planta que desea comprar: \n " +
                            "a) auto-cinderella-jack \n" +
                            "b) auto-lemon-kix \n" + 
                            "c) auto-orange-bud \n" +
                            "d) auto-skywalker-haze \n"


    let selection = prompt(mensajeDeBienvenida).toLowerCase()

    if (selection !== "a" && selection !== "b" && selection !== "c" && selection !== "d") { 
        alert ("Debes ingresar un código válido")
    } else {
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

    const respuesta = confirm("¿Quieres saber el precio de otra planta?")

    if (respuesta) {
        preguntarPrecios()
    } 
}

const plantas = [
    { nombre: "auto cinderella jack", 
      precio: 10000 },
    { nombre: "auto lemon kix", 
      precio: 11000 },
    { nombre: "auto orange bud", 
      precio: 12000 },
    { nombre: "auto skywalker haze", 
      precio: 13000 }
];


const nuevaPlanta = {
    nombre: "auto amnesia haze", 
    precio: 14000 };
    plantas.push(nuevaPlanta);
    console.log(nuevaPlanta.nombre)
    
    
    const nombresPlantas = plantas.map(planta => planta.nombre);
    console.log(nombresPlantas)

    const PrecioPlantas = plantas.map(planta => planta.precio);
    console.log(PrecioPlantas)

