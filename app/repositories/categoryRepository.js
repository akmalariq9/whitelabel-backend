const { category } = require('../../models');

exports.getAllCategory = async () => {
    return await category.findAll();
};

exports.getCategoryById = async (id
    ) => {
    const categoryData = await category.findOne({ where: { id: id } });

    if (!categoryData) {
        return null;
    }

    return categoryData;
};

exports.addCategory = async (data) => {
    return await category.create(data);
}

exports.editCategory = async (data, id) => {
    const categoryData = await category.findOne({ where: { id: id } });

    if (!categoryData) {
        return null;
    }

    await category.update(data, { where: { id: id } });
    return await category.findOne({ where: { id: id } });
};

exports.deleteCategory = async (id) => {
    const categoryData = await category.findOne({ where: { id: id } });

    if (!categoryData) {
        throw new Error('Category tidak ditemukan');
    }

    await category.destroy({ where: { id: id } });
    return categoryData;
};