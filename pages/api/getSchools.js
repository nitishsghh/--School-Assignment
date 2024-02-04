import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'school_db'
});

connection.connect();

export default (req, res) => {
    const sql = `SELECT id, name, address, city, image FROM schools`;

    connection.query(sql, (error, results, fields) => {
        if (error) {
            res.status(500).json({ error: 'Failed to fetch schools.' });
            return;
        }

        res.status(200).json(results);
    });
};
