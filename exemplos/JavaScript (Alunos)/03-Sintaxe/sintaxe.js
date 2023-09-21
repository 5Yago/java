// Comentário de 1 linha
/*Bloco de comentário (Shift + ALT + a) */

// alert("Olá, mundo!");

console.log("Olá, mundo!"); // Exibido no: Inspecionar -> Console
// document.write("Olá, mundo!");

/* Variáveis
Palavras-chave: var, let e const

var -> variável de escopo global
let -> variável de escopo de bloco
const -> const de escopo de bloco
*/

const nome = "Max Verstappen"; // Constante
let ano = 2023; // variável de escopo local
var curso = "Técnico em Desenvolvimento de sistemas"; // Variável global

// Recuperando os valores
document.write('<h2 style="color: blue;">Recuperando valores e concatenação</h2><br>');
// console.log(nome); 


document.write("<strong>Meu nome é: </strong> "+nome+"<br> ")
document.write("<strong>Meu nome é: </strong> "+ano+"<br> ")
document.write("<strong>Meu nome é: </strong> "+curso+"<br> ")

// Concatenação
document.write(`Eu sou o: <strong>${nome}</strong> e em: <strong> ${ano}</strong> estou estudando o curso <strong>${curso}</strong>.<br>`)


document.write("__________________________________________________________________<br>");

// ______________________________________________________________________________________



// String literal/ Template String (Usando a crase)
document.write('<h2 style="color: blue;">String literal/ Template String (Usando a crase)</h2><br>');




document.write("__________________________________________________________________<br>");

// ______________________________________________________________________________________



// Operadores matemáticos
document.write('<h2 style="color: blue;">Operadores matemáticos</h2><br>');

/* Operadores matemáticos

+ adição
- subtração
/ divisão
* multiplicação

*/

let produto = 'TV Led';
let preco = 6500;
let quantidade = 3;
let total = preco * quantidade;


document.write(`Temos atualmente no estoque o produto: <strong>${produto}</strong> <br>`)
document.write(`Custando: <strong>${preco}</strong> <br>`)
document.write(`Temos atualmente no estoque o produto: <strong>${quantidade}</strong> <br>`)
document.write(`Temos atualmente no estoque o produto: <strong>${total}</strong> <br>`)