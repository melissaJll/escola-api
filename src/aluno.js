import conexao from "./banco.js";

// CRUD

//  Ler/Exibir todos os alunos
function ler (res){
    const sql = "SELECT * FROM alunos ORDER BY nome";

    conexao.query(sql, (erro, resultados) => {
        //verificação para ver se há conteudo
        if(resultados.length === 0){
            res.status(204).end(); //Importante trabalhar com os status http 204 = sem conteudo .end() encerra a execução die
            return;
        }
        if (erro) {// erro não é variavel pertence ao mysql2 instalado 
            res.status(400).json(erro.code); //400 = BAD REQUEST
        }else{
            res.status(200).json(resultados);
        }
    });
}

//inserindo dados do aluno
function inserir(aluno, res){
    const sql = "INSERT INTO alunos SET ?";//sintaxe que entende pela ordem

    conexao.query(sql, aluno, (erro) => { //não exibe os dados inseridos só se for erro
        if(erro){
            res.status(400).json(erro.code);
        }else{
            res.status(201).json({"status": "Aluno inserido"});
        }
    })
}


//Ler um aluno
function lerUm(id, res){
    const sql = "SELECT * FROM alunos WHERE id = ?";
    conexao.query(sql, id,(erro, resultados)=>{
        if (resultados === 0) {
            res.status(204).end();
            return; // die()
        }if (erro) {
            res.status(400).json(erro.code);
        }else{
            res.status(200).json(resultados[0]);
        }
    })
}

//atualizar dados de um aluno
function atualizar(id, aluno, res){
    const sql = "UPDATE alunos SET ? WHERE id = ?"
    conexao.query(sql, [aluno, id], (erro, resultados)=>{
        if (erro) {
            res.status(400).json(erro.code);
        } else{
            res.status(200).json({...aluno, id}) //spread operator
        }
    })
}

//excluir
function excluir(id, res){
    const sql = "Delete FROM alunos WHERE id = ?"
}

export {ler, inserir, lerUm, atualizar};