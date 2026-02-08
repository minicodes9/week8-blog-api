const express = require('express');

const {
    postArticle,
    getAllArticle,
    searchArticles,
    getArticleById,
    updateArticleById,
    deleteArticleById,
} = require('../controllers/article.controller.js');

const router = express.Router();

router.post('/', postArticle);

router.get('/', getAllArticle);

router.get('/search', searchArticles);

router.get('/:id', getArticleById);

router.put('/:id', updateArticleById);

router.delete('/:id', deleteArticleById);

module.exports = router; 