const { artikel } = require('../../models');

exports.getAllArtikel = async () => {
    return await artikel.findAll();
};

exports.getArtikelById = async (id) => {
    const artikelData = await artikel.findOne({ where: { id: id } });

    if (!artikelData) {
        return null;
    }

    return artikelData;
};

exports.addArtikel = async (data) => {
    return await artikel.create(data);
};

exports.editArtikel = async (data, id) => {
    const artikelData = await artikel.findOne({ where: { id: id } });

    if (!artikelData) {
        return null;
    }

    await artikel.update(data, { where: { id: id } });
    return await artikel.findOne({ where: { id: id } });
};

exports.deleteArtikel = async (id) => {
    const artikelData = await artikel.findOne({ where: { id: id } });

    if (!artikelData) {
        throw new Error('Artikel tidak ditemukan');
    }

    await artikel.destroy({ where: { id: id } });
    return artikelData;
};