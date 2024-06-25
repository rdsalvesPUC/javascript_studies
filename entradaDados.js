import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu nome: ', (nome) => {
  rl.close();
  console.log(`Olá, ${nome}!`);
});
