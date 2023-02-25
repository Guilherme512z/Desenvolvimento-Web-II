const express = require('express')
const router = express.Router();


router.get('/',(req,res)=>{
    let obj = {
        nome: req.query.nome
    };

    res.render('home',obj)
})
router.get('/rota1',(req,res)=>{
    let obj = {
        disciplinas: [
            {nome: 'Gestão Ágil de Projetos', dia: 'Segunda-Feira', horario: '07:40h às 11:20h'},
            {nome: 'Banco de Dados não relacional', dia: 'Terça-Feira',horario: '07:40h às 09:20h'},
            {nome: 'Inglês 1', dia: 'Terça-Feira', horario: '11:20h às 13:00h'},
            {nome: 'Desenvolvimento Web III', dia: 'Quarta-feira', horario: '07:40h às 09:20h'},
            {nome: 'Interação Humano Computador',dia: 'Quarta-feira',horario:'11:20h às 13:00h'},
            {nome: 'Álgebra Linear',dia: 'Quinta-feira',horario: '07:40h ás 11:20h'},
            {nome: 'Técnicas de Programação II',dia:'Sexta-Feira',horario: '07:40h às 11:20h'}
        ]};
    res.render('rota1',obj)
})
router.get('/rota2',(req,res)=>{
    let obj = {
        historico: [
            {
             Sigla: "AGO021",
             Disciplina: "Gestão Ágil de Projetos de Software",
             Periodo: 20231,
             media: "--",
             frequencia: "--",
             observacao: "Em Curso"
            },
            {
             Sigla: "ESM100",
             Disciplina: "Estágio Supervisionado em Desenvolvimento de Software Multiplataforma",
             Periodo: 20222,
             media: "--",
             frequencia: "--",
             observacao: "Aprovado"
            },
            {
            Sigla: "IAL010",
            Disciplina: "Algoritmo e Lógica de Programação",
             Periodo: 20221,
             media: "8.0",
             frequencia: "100.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             Sigla: "IBD014",
             Disciplina: "Modelagem de Banco de Dados",
             Periodo: 20221,
             media: "6.0",
             frequencia: "100.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             Sigla: "IBD015",
             Disciplina: "Banco de Dados – Relacional",
             Periodo: 20222,
             media: "9.2",
             frequencia: "95.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             Sigla: "IBD016",
             Disciplina: "Banco de Dados - Não relacional",
             Periodo: 20231,
             media: "--",
             frequencia: "--",
             observacao: "Em Curso"
            },
            {
             Sigla: "IED005",
             Disciplina: "Estrutura de Dados",
             Periodo: 20222,
             media: "7.0",
             frequencia: "95.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             Sigla: "IES011",
             Disciplina: "Engenharia de Software I",
             Periodo: 20221,
             media: "8.3",
             frequencia: "100.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             Sigla: "IES012",
             Disciplina: "Engenharia de Software II",
             Periodo: 20222,
             media: "7.7",
             frequencia: "100.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             Sigla: "IHC004",
             Disciplina: "Interação Humano Computador",
             Periodo: 20231,
             media: "--",
             frequencia: "--",
             observacao: "Em Curso"
            },
            {
             Sigla: "ILP036",
             Disciplina: "Técnica de Programação I",
             Periodo: 20222,
             media: "9.6",
             frequencia: "100.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             Sigla: "ILP037",
             Disciplina: "Técnica de Programação II",
             Periodo: 20231,
             media: "--",
             frequencia: "--",
             observacao: "Em Curso"
            },
            {
             Sigla: "ING085",
             Disciplina: "Inglês I",
             Periodo: 20231,
             media: "--",
             frequencia: "--",
             observacao: "Em Curso"
            },
            {
            Sigla: "ISO011",
            Disciplina: "Sistemas Operacionais e Redes de Computadores",
             Periodo: 20221,
             media: "8.4",
             frequencia: "98.75%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             Sigla: "ISW028",
             Disciplina: "Desenvolvimento Web I",
             Periodo: 20221,
             media: "9.5",
             frequencia: "90.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             Sigla: "ISW029",
             Disciplina: "Desenvolvimento Web II",
             Periodo: 20231,
             media: "--",
             frequencia: "--",
             observacao: "Em Curso"
            },
            {
            Sigla: "ISW030",
             Disciplina: "Desenvolvimento Web III",
             Periodo: 20231,
             media: "--",
             frequencia: "--",
             observacao: "Em Curso"
            },
            {
             Sigla: "ISW031",
             Disciplina: "Design Digital",
             Periodo: 20221,
             media: "8.0",
             frequencia: "95.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             Sigla: "MAT019",
             Disciplina: "Matemática para Computação",
             Periodo: 20222,
             media: "8.8",
             frequencia: "100.00%",
             observacao: "Aprovado por Nota e Frequência"
            }
           ]};
    
    res.render('rota2',obj)
})



module.exports = router;