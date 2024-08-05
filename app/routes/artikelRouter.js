const express = require('express');
const router = express.Router();
const artikelController = require('../controllers/artikelController');

router.get('/', artikelController.getAllArtikel);
router.post('/add-artikel', artikelController.addArtikel);
router.patch('/edit-artikel/:id', artikelController.editArtikel);
router.delete('/delete-artikel/:id', artikelController.deleteArtikel);

module.exports = router;
