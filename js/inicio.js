

function preguntarPrecios() {
    const mensajeDeBienvenida =
      "Ingrese el código de la planta que desea comprar: \n" +
      "a) auto-cinderella-jack \n" +
      "b) auto-lemon-kix \n" +
      "c) auto-orange-bud \n" +
      "d) auto-skywalker-haze \n";
  
    const container = document.getElementById("container");
    const input = document.createElement("input");
    const submitButton = document.createElement("button");
    const resultDiv = document.createElement("div");
  
    input.type = "text";
    submitButton.textContent = "Enviar";
  
    submitButton.addEventListener("click", function() {
      const selection = input.value.toLowerCase();
  
      if (
        selection !== "a" &&
        selection !== "b" &&
        selection !== "c" &&
        selection !== "d"
      ) {
        resultDiv.textContent = "Debes ingresar un código válido";
      } else {
        let valor = "";
  
        switch (selection) {
          case "a":
            valor = "auto cinderella jack cuesta $10000";
            break;
          case "b":
            valor = "auto lemon kix cuesta $11000";
            break;
          case "c":
            valor = "auto orange bud cuesta $12000";
            break;
          case "d":
            valor = "auto skywalker haze cuesta $13000";
            break;
          default:
        }
  
        resultDiv.textContent = valor;
  
        localStorage.setItem(selection, valor);
      }
  
      input.value = "";
      input.focus();
    });
  
    container.appendChild(document.createTextNode(mensajeDeBienvenida));
    container.appendChild(input);
    container.appendChild(submitButton);
    container.appendChild(resultDiv);
  
    input.focus();
  }
  
  function mostrarPreciosGuardados() {
    const container = document.getElementById("precios-guardados");
    container.innerHTML = "";
  
    const codigo = localStorage.getItem("selection");
    const valor = localStorage.getItem(codigo);
  
    if (codigo === "b" || codigo === "c" || codigo === "d") {
      const plantDiv = document.createElement("div");
      plantDiv.textContent = `Código: ${codigo} - Precio: ${valor}`;
      container.appendChild(plantDiv);
    }
  }
  
  function miFuncionNueva() {
    console.log("¡Se hizo clic en el botón!");
  }
  
  document.getElementById("preguntar-precios-btn").addEventListener("click", function() {
    preguntarPrecios();
    miFuncionNueva();
  });
  
  const plantas = [
    { nombre: "auto cinderella jack", precio: 10000 },
    { nombre: "auto lemon kix", precio: 11000 },
    { nombre: "auto orange bud", precio: 12000 },
    { nombre: "auto skywalker haze", precio: 13000 }
  ];
  
  const nuevaPlanta = {
    nombre: "auto amnesia haze",
    precio: 14000
  };
  plantas.push(nuevaPlanta);
  console.log(nuevaPlanta.nombre);
  
  const nombresPlantas = plantas.map((planta) => planta.nombre);
  console.log(nombresPlantas);
  
  const PrecioPlantas = plantas.map((planta) => planta.precio);
  console.log(PrecioPlantas);
  
  mostrarPreciosGuardados();