import chalk from "chalk";
import pegaArquivos from "./index.js";
import validaURL from "./http-validacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivos(caminhoDoArquivo[2]);

    if (caminho[3] === "validar"){
        console.log (chalk.blueBright("Lista de Validados"), await validaURL(resultado))  
    } else {
        console.log (chalk.yellow("Lista de Links"), resultado);
    };
}
              
processaTexto(caminho);
                  
