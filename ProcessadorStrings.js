export default class ProcessadorStrings {
    
    static convertUpperCase(texto) {
        return texto.toUpperCase();
    }

    static convertLowerCase(texto) {
        return texto.toLowerCase();
    }

    static extractData(texto, a, z) {
        return texto.substring(a, z);
    }

    static searchData(texto1, texto2) {
        return String.valueOf(texto1.indexOf(texto2));
    }

    static checkDuplicate(texto1, texto2) {
        return texto1.equals(texto2) ? "Duplicado" : "Não duplicado";
    }

    static anatomy(texto1) {
        texto1 = texto1.toLowerCase();

        let vogaisCounter = 0;
        let consoantesCounter = 0;
        let neitherCounter = 0;
    
        const vogais = ['a','e','i','o','u'];
        const consoantes = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','x','w','y','z'];
        
        for (let i = 0; i < texto1.length; i++) {
            for (let j = 0; j < vogais.length; j++) {
                if (texto1.charAt(i) == vogais[j]) {
                    vogaisCounter++;
                }
            }
        }
    
        for (let i = 0; i < texto1.length; i++) {
            for (let j = 0; j < consoantes.length; j++) {
                if (texto1.charAt(i) == consoantes[j]) {
                    consoantesCounter++;
                }
            }
        }

        const notALetter = /[^a-zA-Z]/
    
        for (let i = 0; i < texto1.length; i++) {
            if (notALetter.test(texto1.charAt(i))) {
                neitherCounter++;
            }
        }

        return { vogaisCounter, consoantesCounter, neitherCounter }
    }

    static criptografar(texto) {
        let newString = '';

        for (let i = 0; i < texto.length; i++) {
            let letra = texto.charAt(i);
            let unicodeLetra = letra.charCodeAt();
            let novaLetra = String.fromCharCode(unicodeLetra + 5);
            newString += novaLetra;
        }

        return newString;
    }

    static localizar(letra) {
         const isALetter = /[a-zA-Z]/

        if (isALetter.test(letra)) {
            letra = Character.toUpperCase(letra);
            let posicao = letra - 'A' + 1;
            return "A letra " + letra + " está na posição " + posicao;
        }
        else {
            return "Dado inválido, tente novamente!";
        }
    }
}

// export function convertUpperCase(texto) {
//     return texto.toUpperCase();
// }