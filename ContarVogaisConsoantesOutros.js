import readline from 'readline';
import ProcessadorStrings from './ProcessadorStrings.js';
// import * as ProcessadorStrings from './ProcessadorStrings.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite seu texto: ', (texto) => {
    rl.close();

    const textoProcessado = ProcessadorStrings.anatomy(texto);
    console.log(`Vogais: ${textoProcessado.vogaisCounter}`);
    console.log(`Consoantes: ${textoProcessado.consoantesCounter}`);
    console.log(`Outros Caracteres: ${textoProcessado.neitherCounter}`);
})