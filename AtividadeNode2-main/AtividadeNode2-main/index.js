import chalk from "chalk";
import fs from "fs";

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultado = [];

    let temp;
    while ((temp = regex.exec(texto)) != null){
        arrayResultado.push({ [temp[1]] : [temp[2]]})
    }
    return arrayResultado.length === 0 ? "Não há links" : arrayResultado;
}

function trataErro(erro){
    throw new Error(chalk.redBright(erro.code, "  Não há Aquivo No Caminho :( ... "));
}

async function pegaArquivos(CaminhoDoArquivo){
    const enconding = "utf-8"

    try{
        const texto = await fs.promises.readFile(CaminhoDoArquivo, enconding);
        return(extraiLinks(texto))
    } catch(erro) {
        trataErro(erro);
    }
};

export default pegaArquivos;                