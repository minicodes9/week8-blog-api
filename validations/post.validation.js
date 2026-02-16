const Joi = require('joi');

const validateArticle = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().min(5).max(100).required(),
        content: Joi.string().min(10).required(),
        author: Joi.string().required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

const validateUpdateArticle = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().min(5).max(100),
        content: Joi.string().min(10),
        author: Joi.string()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = { validateArticle, validateUpdateArticle };