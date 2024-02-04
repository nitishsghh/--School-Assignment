import mysql from 'mysql';
import multer from 'multer';

const upload = multer({ dest: 'public/schoolImages/' });

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'school_db'
});

connection.connect();

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async (req, res) => {
    upload.single('file')(req, res, (err) => {
        if (err) {
            res.status(500).json({ error: 'File upload failed.' });
            return;
        }

        const { name, address, city, state, contact, email_id } = req.body;
        const image = req.file.filename;

        const sql = `INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const values = [name, address, city, state, contact, email_id, image];

        connection.query(sql, values, (error, results, fields) => {
            if (error) {
                res.status(500).json({ error: 'Database insertion failed.' });
                return;
            }

            res.status(200).json({ success: true });
        });
    });
};
