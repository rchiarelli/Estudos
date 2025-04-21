let botoesN = document.querySelectorAll(".n")
console.log(botoes)

let tela = document.getElementById("tela")

let igual = document.querySelector(".igual")

let limpar = document.querySelector(".limpar")

let apagar = document.querySelector(".apagar")

let telaN = ''

for (let btn of botoesN) {
  btn.addEventListener("click", function() {
    let numero = btn.textContent
    
    if (numero === "0" && tela.textContent === "0") {
      tela.textContent = ""
    } else if (numero > "0" && numero <= "9" && tela.textContent === "0") {
      tela.textContent = ""
    }
    
    tela.textContent += numero
    
    if (numero >= '0' && numero <= "9" || numero === "." ) {
      telaN += numero
      console.log(numero)
    } else if (["+", "-", "x", "÷"].includes(numero)) {
      telaN += numero
    }
  })
}

igual.addEventListener("click", function() {
  let conta = telaN
  
  conta = conta.replace(/x/g, "*").replace(/÷/g, "/").trim()
  
  try {
    let resultado = eval(conta);
    tela.textContent = resultado;
    telaN = resultado.toString();
  } catch (e) {
    tela.textContent = "Erro";
    telaN = "";
  }
})

apagar.addEventListener("click", function() {
  
  if (tela.textContent.length > 1){
    tela.textContent = tela.textContent.slice(0, -1)
    telaN = telaN.slice(0, -1)
  } else if (tela.textContent.length === 1) {
    tela.textContent = "0"
  }
})

limpar.addEventListener("click", function() {
  tela.textContent = "0"
  telaN = ""
})

console.log(screen.availWidth)