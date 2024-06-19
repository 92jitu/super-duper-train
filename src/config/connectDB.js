const mysql = require('mysql2/promise');

const connection = mysql.createPool({
   host: process.env.DATABASE_HOST, 
    user: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

connection.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'ETIMEDOUT') {
      console.error('Connection timed out.');
    } else {
      console.error('Connection error:', err);
    }
  } else {
    console.log('Connected to the database.');
    connection.release();
  }
});

export default connection;
