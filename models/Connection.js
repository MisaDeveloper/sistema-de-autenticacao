const mysql = require('mysql2/promise');

async function connect() {
    if(global.connection && global.connection !== 'disconnected') {
        return global.connection
    }

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'db_plataforma_de_cursos'
    });

    global.connection = connection;
    return connection;
}

module.exports = connect();