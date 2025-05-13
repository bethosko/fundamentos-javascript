
 
/*
let opcoes = Number(prompt(`
    Selecione a opção desejada:
    1 - Saque
    2 - transferencia
    3 - Saldo
    4 - Extrato
    `));

switch (opcoes){
    case 1:
        alert("Saque");
        break;
    case 2:
        alert("Transferencia");
        break;
    case 3:
        alert("Saldo");
        break;
    case 4:
        alert("Extrato");
        break;
    default:
        alert("Opção inválida");
       
}
*/

// mostarar numeros de 1 a 10

// for (let i = 1; i <= 10; i++) {
//     console.log(`passo: ${i}`);
// }


/*
for (let i = 2; i <= 20; i = i + 2) {
    console.log(`passo: ${i}`);
}
*/

// NUMEROS IMPARES DE 1 - 10
// for (let i = 1; i <= 10; i = i + 2) {
//     console.log(`passo: ${i}`);
// }



// NUMEROS IMPARES DE 1 - 10

// for (let i = 1; i <= 10; i++) {
//    if (i % 2 === 1) {
//     console.log(`${i}`);
//    }
// }


// Numeros ímpare de 1 a 9:

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 1) {
//      console.log(`${i}`);
//     }
//  }


// mostrar a tabuada do numero digitado:

// let numero = Number (prompt(" Digite um numero: "));
// for(let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }

// pedindo senha de acesso:

// let senha = Number(prompt("Digite a senha: "));
// while (senha !== 12345) {
//     senha = Number(prompt("Senha invalida. Tente novamente."));
// }
// alert("Acesso permitido.");

// contagem regressiva do 10 ao 1:

// let contagem = 10
// while (contagem >= 1) {
//     {
//      console.log(contagem);
//      contagem--;
//     }
//  }

// let palavra = prompt("Digite uma palavra:");
// let contador = 1;
// while (contador <= 5 ) {
//     {
//      console.log(palavra );
//      contador++
      
//     }
//  }

// contagem regressiva do 10 ao 1:

// 
// let contagem = prompt("Digite um numero maior 5");
// while (contagem > 0) {
//     if (contagem % 2 === 1) {
//         console.log(`${contagem} - numero é impar`);
//     }
//     else {
//         console.log(`${contagem} - Numero é par`);
//     }
//     contagem--;
//     if (contagem == 0) {
//         console.log("Chegou ao zero")
//     }
// }

// let  palavra;
// do {
//     palavra = prompt("Digite uma palavra senha");
// } while (palavra !== "sair");
// alert("saida permitida.")

// const numeros = [1,2,3,4,5,6];
// const pares = [];

// for(let i = 0; i < numeros.length; i++ ){
//     if(numeros[i] % 2 === 0){
//         pares.push(numeros[i]);
//     }

// }console.log(pares);

// const numeros = [1,2,3,4,5,6];
// numeros.forEach((numero)  => {
//     console.log(numero);   
// })

// const numeros = [10, 20, 30];
// let acumulador = 0;
// numeros.forEach((Element) =>{
//     acumulador = acumulador + Element;
// });
    
// console.log(acumulador);

// const numeros = [10, 20, 30];
// let acumulador = 0;
// numeros.forEach((Element) =>{
//     acumulador += Element;
// });
    
// console.log(acumulador);

// const numeros = [1,2,3,4,5,6,];
// const dobrados =  numeros.map((elemento) =>{
//      return elemento * 2
// });    
// console.log(dobrados);
// console.log(numeros);

 
// const numeros = [15, 20, 8, 12];
// const soma =  numeros.map((elemento) =>{
//      return elemento + 10
// });    
// console.log(soma);

// const numeros = [10, 20, 30];
// const soma =  numeros.reduce((acumulador,numero) =>{
//      return acumulador + numero
// }, 0);    
// console.log(soma);

const numeros = [7, 8, 6, 9, 5, ];
const soma =  numeros.reduce((acumulador,numero) =>{
     return acumulador + numero
}, 0);    
console.log(soma / 5);
