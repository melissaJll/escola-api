import mysql2 from 'mysql2';

//dados da conexão
const conexao = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    passworord: '',
    database: 'escola'
});
//efetivando a conexao
// opção sem pegar erro   conexao.connect();
conexao.connect( erro=>{
    if(erro){
        console.error(`Erro da conexão: ${erro.message}`)
    }else{
        console.error(`Banco conectado com sucesso`)
    }
});

export default conexao;