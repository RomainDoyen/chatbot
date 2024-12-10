const mysql = require("mysql2/promise");
require("dotenv").config();

const createDatabase = async () => {
    const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

    try {
        const connection = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
        });

        console.log(`Connexion à MySQL réussie.`);

        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
        console.log(`Base de données "${DB_NAME}" créée ou déjà existante.`);

        await connection.end();
    } catch (err) {
        console.error(`Erreur lors de la création de la base de données :`, err);
    }
};

createDatabase();
