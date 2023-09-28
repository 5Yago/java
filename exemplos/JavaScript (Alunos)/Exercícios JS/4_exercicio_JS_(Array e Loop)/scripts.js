document.write('<h2 style="color: blue;">Resolução</h2><br>');



// Digite a resolução do exercício aqui e visualize o resultado no navegador

let carros = [
    "Dead Cells ", "ScourgeBringer", "Castlevania SoTN", "Blasphemous", "Dandara"
];

// Cache do tamanho array
let tamanho = carros.length;

for (let i = 0; i < tamanho; i++) {
    document.write(`Meus Metroidvanias favoritos  são: <strong>${carros[i]}</strong><br>`);
}

