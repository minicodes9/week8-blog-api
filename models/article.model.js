const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 10
    },
    content: {
        type: String,
        required: true,
        minlength: 30
    },
    author:{
        type: String,
        default: "Guest"
    }
},{timestamps: true});

const Article = mongoose.model('Article', articleSchema);

articleSchema.index({ title: 'text', content: 'text'});

module.exports = Article;