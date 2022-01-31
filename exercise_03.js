var prompt  = require(`prompt-sync`)();

const num = +prompt('Digite um número inteiro maior do que zero: ');

if (num <= 0){
    console.log(`Ops! Digite um número inteiro maior do que zero`);
} else if (num%2 == 0){
    console.log(`Par`);
} else {
    console.log(`Impar`);
}
