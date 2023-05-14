//const mysql = require('mysql2/promise');
const mysql = require('mysql');

async function connect() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'contact_db',
    });
    console.log('Connected to MySQL database');
    return connection;
  } catch (err) {
    console.error('Error connecting to MySQL database', err);
    process.exit(1);
  }
}

module.exports =  {connect };
