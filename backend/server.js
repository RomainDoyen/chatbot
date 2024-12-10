const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5120;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion MySQL
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    multipleStatements: true, // Permet d'exécuter plusieurs requêtes en une fois
});

// Test de connexion
db.getConnection((err) => {
    if (err) console.error("Erreur de connexion à MySQL : ", err);
    else console.log("Connecté à MySQL !");
});

// Lancer le serveur
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
