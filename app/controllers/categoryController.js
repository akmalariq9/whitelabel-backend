const categoryService = require('../services/categoryService');

exports.getAllCategory = async (req, res) => {
    categoryService.getAllCategory()
    .then(category => {
        res.status(200).json({
            status: 'success',
            message: 'Category berhasil didapatkan',
            data: category
        });
    })
    .catch(error => {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    });
};

exports.getCategoryById = async (req, res) => {
    categoryService.getCategoryById(req.params.id)
    .then(category => {
        res.status(200).json({
            status: 'success',
            message: 'Category berhasil didapatkan',
            data: category
        });
    })
    .catch(error => {
        if (error.message === 'Category tidak ditemukan') {
            res.status(404).json({
                status: 'error',
                message: error.message
            });
        } else {
            res.status(500).json({
                status: 'error',
                message: 'Terjadi kesalahan pada server'
            });
        }
    });
};

exports.addCategory = async (req, res) => {
    categoryService.addCategory(req.body)
    .then(category => {
        res.status(201).json({
            status: 'success',
            message: 'Category berhasil ditambahkan',
            data: category
        });
    })
    .catch(error => {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    });
};

exports.editCategory = async (req, res) => {
    categoryService.editCategory(req.body, req.params.id)
    .then(category => {
        res.status(200).json({
            status: 'success',
            message: 'Category berhasil diubah',
            data: category
        });
    })
    .catch(error => {
        if (error.message === 'Category tidak ditemukan') {
            res.status(404).json({
                status: 'error',
                message: error.message
            });
        } else {
            res.status(500).json({
                status: 'error',
                message: 'Terjadi kesalahan pada server'
            });
        }
    });
};

exports.deleteCategory = async (req, res) => {
    categoryService.deleteCategory(req.params.id)
    .then(category => {
        res.status(200).json({
            status: 'success',
            message: 'Category berhasil dihapus',
            data: category
        });
    })
    .catch(error => {
        if (error.message === 'Category tidak ditemukan') {
            res.status(404).json({
                status: 'error',
                message: error.message
            });
        } else {
            res.status(500).json({
                status: 'error',
                message: 'Terjadi kesalahan pada server'
            });
        }
    });
};