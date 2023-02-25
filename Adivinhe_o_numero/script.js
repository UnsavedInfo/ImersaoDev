//Math.random sorteia um número entre 0(incluso) e 1(exclusivo)
var numeroSecreto = parseInt(Math.random() * 1001);

while (numeroSecreto == 0){
  numeroSecreto = parseInt(Math.random() * 1001)
}

numeroDeTentativas = 0

//parserInt converte para um número inteiro

//Aqui posso usar o chute no while mesmo sem ele estar definido ainda

//Chamamos essa estrutura de controle de fluxo
while (chute != numeroSecreto){  //laço de repetição

var chute = prompt("Digite um número entre 1 e 1000");
  
  if (chute == null) {
    break
  }
 
  if (chute == numeroSecreto) { 
    alert("Você acertou!")
  } else if (chute > numeroSecreto) {
    numeroDeTentativas = numeroDeTentativas + 1
    alert("Errou! O número secreto é menor que " + chute + ". \nTente novamente." + "\n\n Número de tentativas: " + numeroDeTentativas)
  } else if (chute < numeroSecreto) {
    numeroDeTentativas = numeroDeTentativas + 1
    alert("Errou! O número secreto é maior que " + chute + ". \nTente novamente." + "\n\n Número de tentativas: " + numeroDeTentativas)
  }
}

//Tenho que colocar chaves pra rodar a ação da condicional

//if (chute < numeroSecreto) {
//  alert("Tente um número maior")}

//if (chute > numeroSecreto) {
//  alert("Tente um número menor")}