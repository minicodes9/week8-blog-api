const express = require('express');
const {
    postArticle,
    getAllArticle,
    getArticleById,
    updateArticleById,
    deleteArticleById,
} = require('../controllers/article.controller.js');

const { validateArticle, validateUpdateArticle } = require('../validations/post.validation.js');
const requireAuth = require('../middlewares/requireAuth.js');

const router = express.Router();

router.post('/', validateArticle, requireAuth, postArticle); 
router.get('/', requireAuth, getAllArticle);
router.get('/:id', requireAuth, getArticleById);
router.put('/:id', validateUpdateArticle, requireAuth, updateArticleById);
router.delete('/:id', requireAuth, deleteArticleById);

module.exports = router;