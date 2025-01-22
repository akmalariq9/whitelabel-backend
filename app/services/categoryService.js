const categoryRepository = require('../repositories/categoryRepository');

exports.getAllCategory = async () => {
    try {
        const category = await categoryRepository.getAllCategory();
        return category;
    }
    catch (error) {
        throw error;
    }
};

exports.getCategoryById = async (id
    ) => {
    const categoryData = await categoryRepository.getCategoryById(id);

    if (!categoryData) {
        throw new Error('Category tidak ditemukan');
    }

    return categoryData;
};

exports.addCategory = async (data) => {
    try {
        const category = await categoryRepository.addCategory(data);
        return category;
    }
    catch (error) {
        throw error;
    }
};

exports.editCategory = async (data, id) => {
    const categoryData = await categoryRepository.getCategoryById(id);

    if (!categoryData) {
        throw new Error('Category tidak ditemukan');
    }

    try {
        const category = await categoryRepository.editCategory(data, id);
        return category;
    }
    catch (error) {
        throw error;
    }
};

exports.deleteCategory = async (id) => {
    const categoryData = await categoryRepository.getCategoryById(id);

    if (!categoryData) {
        throw new Error('Category tidak ditemukan');
    }

    try {
        const category = await categoryRepository.deleteCategory(id);
        return category;
    }
    catch (error) {
        throw error;
    }
};