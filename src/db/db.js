import mysql from 'mysql2/promise';
<<<<<<< HEAD
//Criação do pool de conexões
const db = mysql.createPool({
   
=======

const db = mysql.createPool({
    
>>>>>>> ea3930515a07c23086b79822d103104c5d1b43bf
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
<<<<<<< HEAD
 
//Função de teste de conexão auto-executavel
 
=======


>>>>>>> ea3930515a07c23086b79822d103104c5d1b43bf
(async () => {
    try{
        const connection = await db.getConnection();
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
<<<<<<< HEAD
        connection.release(); //Libera a conexão de volta para o pool
=======
        connection.release(); 
>>>>>>> ea3930515a07c23086b79822d103104c5d1b43bf
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
})();
<<<<<<< HEAD
 
//Usando 'export default' para exportar a instância do poll de conexões.
export default db;
=======


export default db;
>>>>>>> ea3930515a07c23086b79822d103104c5d1b43bf
