import express from "express";
import { inserir, ler } from './src/aluno.js';

const app = express();
//const porta = 8080; já declarado antes de executas


//adicionando suporte ao formato json
app.use(express.json());
//adicionando suporte aos dados vindos do formularios
app.use(express.urlencoded({ extended: true}));



app.get('/', (req, res)=>{
    res.send(`Raiz da API com nodeJs + express + Mysql`);
});

/// Pegar dados de todos os Alunos
app.get('/alunos', (req, res) => {
    //res.send("Todos os alunos");
    ler(res);
});

/// Buscando de um aluno
app.get("/alunos/:id", (req,res)=> {
    res.send("Dados de apenas um aluno");
});

// Inserindo Novo Aluno
app.post("/alunos", (req,res)=> {
    //res.send("Inserindo +1 aluno");
    const novoAluno = req.body;
    inserir(novoAluno, res)
});

//Alterando
app.patch("/alunos/:id", (req,res)=> {
    res.send("Um aluno alterado");
});

//Excluindo 
app.delete("/alunos/:id", (req,res)=> {
    res.send("Um aluno exluido");
});
 
//Executando o servidor
const porta = 8080;
app.listen(porta, () => {
    console.log(`Servidor NodeJs rodando na porta ${porta}`);
});