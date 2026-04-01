const mysql = require('mysql2'); // [cite: 84]

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'bouazdia_ahmed_choukri_product-db' // [cite: 85]
});

db.connect((err) => {
    if (err) {
        // Affiche un message d'erreur si la connexion échoue [cite: 87]
        console.error('Erreur connexion DB: ' + err.message);
    } else {
        // Affiche un message de succès si la connexion fonctionne [cite: 86]
        console.log('Connecté à la base de données MySQL.');
    }
});

module.exports = db; // [cite: 88]