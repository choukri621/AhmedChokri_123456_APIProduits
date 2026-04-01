const express = require('express');
const cors = require('cors');

const app = express(); // On crée "app" d'abord
app.use(cors());       // On utilise "cors" ensuite
const productsRoutes = require('./routes/products'); // Importation de vos routes [cite: 100]

app.use(express.json()); // 3. Middleware pour lire le JSON [cite: 57]

// Route de base demandée pour l'Activité 01 - Partie 2 [cite: 63-64]
app.get('/', (req, res) => {
    res.send("Bienvenue sur l'API Produits");
});

// 4. Utilisation des routes produits sous le préfixe /products [cite: 101]
app.use('/products', productsRoutes);

const PORT = 5000; // 5. Port 5000 [cite: 58]
app.listen(PORT, () => {
    // 6. Message de confirmation dans la console [cite: 59]
    console.log(`Serveur démarré sur le port ${PORT}`);
});