const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET produits
router.get('/', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// POST produit
router.post('/', (req, res) => {
    const { name, price, quantity, category } = req.body;

    const sql = 'INSERT INTO products (name, price, quantity, category) VALUES (?, ?, ?, ?)';

    db.query(sql, [name, price, quantity, category], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Produit ajouté' });
    });
});

module.exports = router;