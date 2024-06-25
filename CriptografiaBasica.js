import readline from 'readline';
import ProcessadorStrings from './ProcessadorStrings.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite um texto: ', (texto) => {
    rl.close();

    const textoCriptografado = ProcessadorStrings.criptografar(texto);
    console.log(textoCriptografado);
})