var anoLuzEmMetro = 9.461 * 10**15;
var metroEmAnoLuz = 1.057 * 10 **-16;
var nome = prompt("Qual é o seu nome?");

var pergunta = prompt("Qual medida você deseja converter? \n Digite:\n\nm- metro  al- anos luz")

if (pergunta == "al"){
  var valorEmAnosLuz = prompt("Digite o valor em anos luz: ");
  var valorEmMetro = valorEmAnosLuz * anoLuzEmMetro;
  
  valorEmMetro = valorEmMetro.toExponential(2); //método
  alert(nome + ", seu valor é igual a " + valorEmMetro + " metros");
}else if(pergunta =="m"){
  var valorEmMetro = prompt("Digite o valor em metros: ");
  var valorEmAnosLuz = valorEmMetro * metroEmAnoLuz;
  
  valorEmAnoLuz = valorEmAnosLuz.toExponential(2); //método
  alert(nome + ", seu valor é igual a " + valorEmAnoLuz + "Anos-luz");
  
}