var prompt  = require(`prompt-sync`)();

const num1 = +prompt('Digite um número inteiro: ');
const num2 = +prompt('Digite outro número inteiro: ');

if (num1>=num2 && num1%num2 == 0){
    console.log(`Os números são multiplos.`);
} else {
    console.log(`Os números não são multiplos.`);
}