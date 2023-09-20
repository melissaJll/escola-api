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
            res.status(400).json(erro.code);
        }else{
            
        }
    });
}