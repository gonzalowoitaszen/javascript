

function preguntarPrecios(identificador) {
  const mensajeDeBienvenida =
    "Ingrese el código de la planta que desea comprar: \n" +
    "a) auto-cinderella-jack \n" +
    "b) auto-lemon-kix \n" +
    "c) auto-orange-bud \n" +
    "d) auto-skywalker-haze \n";

  const container = document.getElementById(`container-${identificador}`);
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

function mostrarPreciosGuardados(identificador) {
  const container = document.getElementById(`precios-guardados-${identificador}`);
  container.innerHTML = "";

  const codigo = localStorage.getItem("selection");
  const valor = localStorage.getItem(codigo);

  if (codigo === "b" || codigo === "c" || codigo === "d") {
    const plantDiv = document.createElement("div");
    plantDiv.textContent = `Código: ${codigo} - Precio: ${valor}`;
    container.appendChild(plantDiv);
  }
}

document.getElementById("preguntar-precios-btn-1").addEventListener("click", function() {
  preguntarPrecios(1);
});
document.getElementById("preguntar-precios-btn-2").addEventListener("click", function() {
  preguntarPrecios(2);
});
document.getElementById("preguntar-precios-btn-3").addEventListener("click", function() {
  preguntarPrecios(3);
});
document.getElementById("preguntar-precios-btn-4").addEventListener("click", function() {
  preguntarPrecios(4);
});


mostrarPreciosGuardados(1);
mostrarPreciosGuardados(2);
mostrarPreciosGuardados(3);
mostrarPreciosGuardados(4);

let timerInterval
Swal.fire({
  title: 'Bienvenid@ a la tienda intergalactica de semillas mágicas!!!',
  html: 'Este aviso se cerrará en 3 <b></b> segundos.',
  timer: 3000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
});



function obtenerChisteChuckNorris() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      const chiste = data.value;
      Swal.fire({
        icon: 'success',
        title: 'Chiste de Chuck Norris',
        text: chiste
      });
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Error al obtener el chiste',
        text: error.message
      });
    });
}

document.getElementById("obtener-chiste-btn").addEventListener("click", obtenerChisteChuckNorris);