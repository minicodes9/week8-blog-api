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

router.use(requireAuth);

router.post('/', validateArticle, postArticle); 
router.get('/', getAllArticle);
router.get('/:id', getArticleById);
router.put('/:id', validateUpdateArticle, updateArticleById);
router.delete('/:id', deleteArticleById);

module.exports = router;