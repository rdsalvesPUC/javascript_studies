import readline from 'readline';

function CirculoAreaPerimetro(raio) {    
    const area = raio * Math.PI;
    const perimetro = 2 * Math.PI * raio;
    
    return { area, perimetro }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// function tradicional
// function calcularRaio(raio) {
//     rl.close();
    
//     const resultado = CirculoAreaPerimetro(raio);
    
//     console.log(`Área do circulo: ${resultado.area.toFixed(2)}`);
//     console.log(`Perimetro do circulo: ${resultado.perimetro.toFixed(2)}`)
// }

// rl.question('Digite o valor do raio: ', calcularRaio);


// arrow function (somente porque esse é um cenário de callback)
rl.question('Digite o valor do raio: ', (raio) => {
    rl.close();
    
    const resultado = CirculoAreaPerimetro(raio);
    
    console.log(`Área do circulo: ${resultado.area.toFixed(2)}`);
    console.log(`Perimetro do circulo: ${resultado.perimetro.toFixed(2)}`)
});