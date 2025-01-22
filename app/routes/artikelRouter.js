const express = require('express');
const router = express.Router();
const artikelController = require('../controllers/artikelController');
const upload = require('../middlewares/multerSetup');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', artikelController.getAllArtikel);
router.get('/:id', artikelController.getArtikelById);

router.get('/user/:id', authMiddleware, artikelController.getArtikelByUserId);
router.post('/add-artikel', upload.single('image'), authMiddleware, artikelController.addArtikel); 
router.patch('/edit-artikel/:id', upload.single('image'), authMiddleware, artikelController.editArtikel);
router.delete('/delete-artikel/:id', authMiddleware, artikelController.deleteArtikel);
    
module.exports = router;
