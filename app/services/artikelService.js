const artikelRepository = require('../repositories/artikelRepository');

exports.getAllArtikel = async () => {
    try {
        const artikel = await artikelRepository.getAllArtikel();
        return artikel;
    }
    catch (error) {
        throw error;
    }
};

exports.getArtikelById = async (id) => {
    const artikelData = await artikelRepository.getArtikelById(id);

    if (!artikelData) {
        throw new Error('Artikel tidak ditemukan');
    }

    return artikelData;
};

exports.addArtikel = async (data) => {
    try {
        const artikel = await artikelRepository.addArtikel(data);
        return artikel;
    }
    catch (error) {
        throw error;
    }
};

exports.editArtikel = async (data, id) => {
    try {
        const artikelData = await artikelRepository.editArtikel(data, id);
        return artikelData;
    } catch (error) {
        throw error;
    }
};

exports.deleteArtikel = async (id) => {
    try {
        const artikel = await artikelRepository.deleteArtikel(id);
        return artikel;
    }
    catch (error) {
        throw error;
    }
};

