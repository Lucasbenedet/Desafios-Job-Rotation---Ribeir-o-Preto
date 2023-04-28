let numero = 55;
let a = 0;
let b = 1;
let aux = 0;
while (b < numero) {
    
    aux = a + b;
    a = b;
    b = aux;
}

if (b == numero) {
    console.log(numero, " Pertence a sequencia de Fibonacci.");
} else {
    console.log(numero, " Não Pertence a sequencia de Fibonacci.");
}