const Joi = require('joi');
const Article = require('../models/article.model');

//Create a new Blog Post
const postArticle = async (req, res, next) => {
    const articleSchema = Joi.object({
        title: Joi.string().min(10).required(),
        content: Joi.string().min(30).required(),
        author: Joi.string().optional().default("Guest")
    });

    const { error } = articleSchema.validate(req.body);
    if (error) return res.status(400).json({message:error.details[0].message});

    try {
        const article = new Article(req.body);
        await article.save();

        res.status(200).json(article);
    } catch (error) {

        res.status(500).json({ message: error.message});
    }
};

//Get All Blog Posts with Pagination
const getAllArticle = async (req, res, next) => {
    const { limit = 10, page = 1} = req.query;
    const skip = (page - 1) * limit;

    try {
        const articles = await Article.find({})
        .sort({ createdAt: -1 })
        .limit(Number(limit))
        .skip(Number(skip));

        res.status(200).json(articles);
    } catch (error) {

        res.status(500).json({ message: error.message});
    }
};

//Search Blog Posts
const searchArticles = async (req, res, next) => {
    try {
        const { q } = req.query;
        const articles = await Article.find({
            $text: { $search: q}
        });

        res.status(200).json(articles);
    } catch (error) {
        
        res.status(500).json({ message: error.message});
    }
};

//Get One Post By ID
const getArticleById = async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) return res.status(404).json({ message: "Article not found"});

        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

//Update a Post
const updateArticleById = async (req, res, next) => {

    const articleSchema = Joi.object({
        title: Joi.string().min(10).optional(),
        content: Joi.string().min(30).optional(),
        author: Joi.string().optional()
    });

    const { error } = articleSchema.validate(req.body);
    try {
        const updatedArticle = await Article.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true, }
        );

        res.status(200).json(updatedArticle);
    } catch (error) {

        res.status(500).json({ message: error.message});
    }
};

//Delete a Post
const deleteArticleById = async (req, res, next) => {
    try {
        await Article.findByIdAndDelete(req.params.id);

        res.status(204).json({ message: "Article Deleted" });
    } catch (error) {

        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    postArticle,
    getAllArticle,
    searchArticles,
    getArticleById,
    updateArticleById,
    deleteArticleById
};



