const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getAllCategory);
router.get('/:id', categoryController.getCategoryById);
router.post('/add-category', categoryController.addCategory);
router.put('/:id', categoryController.editCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;