import mysql2 from 'mysql2';


//dados da conexão
// const conexao = mysql2.createConnection({
//     host: 'localhost',
//     user: 'root',
//     passworord: '',
//     database: 'escola'
// });

const conexao = mysql2.createConnection({
    host: 'db4free.net',
    user: 'melissajlll',
    password: 'senac123',
    database: 'apiescolanode'
});

//efetivando a conexao
// opção sem pegar erro   conexao.connect();

// Banco de dados: apiescolanode
// Nome de usuário: melissajlll
// Email: civef69505@bnovel.com

// Host: db4free.net
// Porta: 3306

// apiescolanode
// melissajlll
// senac123
conexao.connect( erro=>{
    if(erro){
        console.error(`Erro da conexão: ${erro.message}`)
    }else{
        console.error(`Banco conectado em ${conexao.config.host}`)
    }
});

export default conexao;