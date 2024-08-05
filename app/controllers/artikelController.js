const artikelService = require('../services/artikelService');

exports.getAllArtikel = async (req, res) => {
    artikelService.getAllArtikel()
    .then(artikel => {
        res.status(200).json({
            status: 'success',
            message: 'Artikel berhasil didapatkan',
            data: artikel
        });
    })
    .catch(error => {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    });
};

exports.addArtikel = async (req, res) => {
    artikelService.addArtikel(req.body)
    .then(artikel => {
        res.status(201).json({
            status: 'success',
            message: 'Artikel berhasil ditambahkan',
            data: artikel
        });
    })
    .catch(error => {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    });
};

exports.editArtikel = async (req, res) => {
    artikelService.editArtikel(req.body, req.params.id)
        .then(artikel => {
            res.status(200).json({
                status: 'success',
                message: 'Artikel berhasil diubah',
                data: artikel
            });
        })
        .catch(error => {
            if (error.message === 'Artikel tidak ditemukan') {
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

exports.deleteArtikel = async (req, res) => {
    artikelService.deleteArtikel(req.params.id)
    .then(artikel => {
        res.status(200).json({
            status: 'success',
            message: 'Artikel berhasil dihapus',
            data: artikel
        });
    })
    .catch(error => {
        if (error.message === 'Artikel tidak ditemukan') {
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