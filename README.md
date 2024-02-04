This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
# npx create-next-app my-school-project
# npm install react-hook-form
# npm install multer

# npm install mysql
# npm install react-hook-form mysql2 multer


Connect with My sql 
create a table 
# Code Mysql 
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    contact VARCHAR(20), -- Change VARCHAR(20) if you need more or less digits
    image TEXT,
    email_id TEXT
);



# Code 
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'your-mysql-host',
  user: 'your-mysql-username',
  password: 'your-mysql-password',
  database: 'your-database-name',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise(); 




"" # School Assignment On NextJs
