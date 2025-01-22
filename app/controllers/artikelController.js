const artikelService = require("../services/artikelService");
const { isUUID } = require("validator");
const sharp = require("sharp");
const category = require("../../models/category");

exports.getAllArtikel = async (req, res) => {
  artikelService
    .getAllArtikel()
    .then((artikel) => {
      res.status(200).json({
        status: "success",
        message: "Artikel berhasil didapatkan",
        data: artikel,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    });
};

exports.getArtikelById = async (req, res) => {
  artikelService
    .getArtikelById(req.params.id)
    .then((artikel) => {
      res.status(200).json({
        status: "success",
        message: "Artikel berhasil didapatkan",
        data: artikel,
      });
    })
    .catch((error) => {
      if (error.message === "Artikel tidak ditemukan") {
        res.status(404).json({
          status: "error",
          message: error.message,
        });
      } else {
        res.status(500).json({
          status: "error",
          message: "Terjadi kesalahan pada server",
        });
      }
    });
};

exports.getArtikelByUserId = async (req, res) => {
  artikelService
    .getArtikelByUserId(req.params.id)
    .then((artikel) => {
      res.status(200).json({
        status: "success",
        message: "Artikel berhasil didapatkan",
        data: artikel,
      });
    })
    .catch((error) => {
      if (error.message === "Artikel tidak ditemukan") {
        res.status(404).json({
          status: "error",
          message: error.message,
        });
      } else {
        res.status(500).json({
          status: "error",
          message: "Terjadi kesalahan pada server",
        });
      }
    });
};

exports.addArtikel = async (req, res) => {
  try {
    if (req.file) {
      const metadata = await sharp(req.file.path).metadata();

      if (metadata.width !== 1920 || metadata.height !== 1080) {
        return res.status(400).json({
          status: "error",
          message: "Image must have resolution of 1920x1080 pixels.",
        });
      }
    }

    const data = {
      title: req.body.title,
      content: req.body.content,
      image: req.file ? req.file.filename : null,
      userId: req.body.userId,
      categoryId: req.body.categoryId,
    };

    const result = await artikelService.addArtikel(data);
    res.status(201).json({
      status: "success",
      message: "Artikel berhasil ditambahkan",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.editArtikel = async (req, res) => {
  if (req.file) {
    const metadata = await sharp(req.file.path).metadata();

    if (metadata.width !== 1920 || metadata.height !== 1080) {
      return res.status(400).json({
        status: "error",
        message: "Image must have resolution of 1920x1080 pixels.",
      });
    }
  }

  const artikelId = req.params.id;

  if (!isUUID(artikelId)) {
    return res
      .status(400)
      .json({ status: "error", message: "ID artikel tidak valid" });
  }

  try {
    const artikelData = await artikelService.getArtikelById(artikelId);
    if (!artikelData) {
      return res
        .status(404)
        .json({ status: "error", message: "Artikel tidak ditemukan" });
    }

    const data = {
      title: req.body.title,
      content: req.body.content,
      image: req.file ? req.file.filename : artikelData.image,
      userId: req.body.userId,
      categoryId: req.body.categoryId,
    };

    const updatedArtikel = await artikelService.editArtikel(data, artikelId);
    res.status(200).json({
      status: "success",
      message: "Artikel berhasil diubah",
      data: updatedArtikel,
    });
  } catch (error) {
    if (error.message === "Artikel tidak ditemukan") {
      res.status(404).json({
        status: "error",
        message: error.message,
      });
    } else {
      res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan pada server",
      });
    }
  }
};

exports.deleteArtikel = async (req, res) => {
  artikelService
    .deleteArtikel(req.params.id)
    .then((artikel) => {
      res.status(200).json({
        status: "success",
        message: "Artikel berhasil dihapus",
        data: artikel,
      });
    })
    .catch((error) => {
      if (error.message === "Artikel tidak ditemukan") {
        res.status(404).json({
          status: "error",
          message: error.message,
        });
      } else {
        res.status(500).json({
          status: "error",
          message: "Terjadi kesalahan pada server",
        });
      }
    });
};
