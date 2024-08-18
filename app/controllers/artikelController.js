const artikelService = require('../services/artikelService');
const upload = require('../middlewares/multerSetup');
const fs = require('fs');
const path = require('path');

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

exports.getArtikelById = async (req, res) => {
    artikelService.getArtikelById(req.params.id)
    .then(artikel => {
        res.status(200).json({
            status: 'success',
            message: 'Artikel berhasil didapatkan',
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

exports.addArtikel = async (req, res) => {
    upload.single('image')(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ status: 'error', message: err.message });
        }

        const data = {
            title: req.body.title,
            content: req.body.content,
            image: req.file ? req.file.filename : null
        };

        artikelService.addArtikel(data)
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
    });
};

exports.editArtikel = async (req, res) => {
    upload.single('image')(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ status: 'error', message: err.message });
        }

        const artikelId = req.params.id;

        try {
            let artikelData = await artikelService.getArtikelById(artikelId);

            if (!artikelData) {
                return res.status(404).json({ status: 'error', message: 'Artikel tidak ditemukan' });
            }

            const data = {
                title: req.body.title,
                content: req.body.content,
                image: req.file ? req.file.filename : artikelData.image
            };

            artikelService.editArtikel(data, artikelId)
                .then(artikel => {
                    res.status(200).json({
                        status: 'success',
                        message: 'Artikel berhasil diubah',
                        data: artikel
                    });
                })
                .catch(error => {
                    res.status(500).json({
                        status: 'error',
                        message: error.message
                    });
                });
        } catch (error) {
            if (error.message === 'Artikel tidak ditemukan') {
                return res.status(404).json({ status: 'error', message: error.message });
            }
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