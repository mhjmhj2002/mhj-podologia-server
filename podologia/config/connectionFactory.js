const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host : '31.170.161.43',
    user : 'u695513924_clinica',
    password : '@Mhj197704',
    database : 'u695513924_podologia'
});

console.log('pool => criado');

pool.on('release', () => console.log('pool => conexão retornada'));

process.on('SIGINT', () => 
    pool.end(err => {
        if(err) return console.log(err);
        console.log('pool => fechado');
        process.exit(0);
    })
); 

module.exports = pool;
