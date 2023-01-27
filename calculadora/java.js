const resultadoElement = document.getElementById("resultado")
console.log(resultadoElement)
function insert(num) {
  var numero = resultadoElement.innerHTML
  resultadoElement.innerHTML = numero + num
}
function clean() {
  resultadoElement.innerHTML = ""
}

function back() {
  var resultado = resultadoElement.innerHTML
  resultadoElement.innerHTML = resultado.substring(0, resultado.length - 1)
}

function calc() {
  var resultado = resultadoElement.innerHTML
  if (resultado) {
    var resultado = resultadoElement.innerHTML
    resultadoElement.innerHTML = eval(resultado)
  } else {
    resultadoElement.innerHTML = "nada para calcular"
  }
}
