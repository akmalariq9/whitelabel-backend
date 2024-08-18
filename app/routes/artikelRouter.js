const express = require('express');
const router = express.Router();
const artikelController = require('../controllers/artikelController');
const upload = require('../middlewares/multerSetup');

router.get('/', artikelController.getAllArtikel);
router.get('/:id', artikelController.getArtikelById);
router.post('/add-artikel', artikelController.addArtikel);
router.post('/add-artikel', upload.single('image'), artikelController.addArtikel); 
router.patch('/edit-artikel/:id', artikelController.editArtikel);
router.patch('/edit-artikel/:id', upload.single('image'), artikelController.editArtikel);
router.delete('/delete-artikel/:id', artikelController.deleteArtikel);

module.exports = router;
