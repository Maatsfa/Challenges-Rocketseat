// DESAFIO CALCULA IMC

const nome = "Mateus";
const peso = 57;
const altura = 1.63;

const imc = peso / (altura*altura);

if(imc >= 40){
    console.log("Obesidade grau 3");
}else if(imc >= 35 && imc <= 39){
    console.log("Obesidade grau 2");
}else if(imc >= 30 && imc <= 34){
    console.log("Obesidade grau 1");
}else if(imc >= 25 && imc <= 29){
    console.log("Sobrepeso");
}else if(imc >= 18 && imc <= 24){
    console.log("Peso normal");
}else {
    console.log("Abaixo do peso"); 
} 

// DESAFIO CALCULA APOSENTADORIA

const nome = "Rosi";
const sexo = "F";
const idade = 49;
const contribuicao = 36;

const regra = idade + contribuicao;

if(contribuicao >= 30){
    if(regra >= 85){
        console.log("Você pode se aposentar");
    }else {
        console.log("Você não pode se aposentar");
    }
}else {
    console.log("Você não pode se aposentar");
}
