import express from "express";

const app = express();

app.get('/', (req, res)=>{
    res.send(`raiz da API com nodeJs + express + Mysql`);
});
/// Url para Pegar od dados de todo
app.get("/alunos", (req, res) => {
    res.send("Todos os alunos");
});
/// Url para Pegar de um aluno
app.get("/alunos/:id", (req,res)=> {
    res.send("Dados de apenas um aluno");
});
app.patch("/alunos/:id", (req,res)=> {
    res.send("Um aluno adicionado +1");
});

app.delete("/alunos/:id", (req,res)=> {
    res.send("Um aluno exluido -1");
});

//Executando o servidor
const porta = 8080;
app.listen(porta, () => {
    console.log(`Servidor NodeJs rodando na porta ${porta}`);
});