const express = require('express');
const cors = require('cors');
const logger = require('./middlewares/logger.js');
const errorhandler = require('./middlewares/errorHandler.js');

const ArticleRoutes = require('./routes/article.routes.js');
const UserRoutes = require('./routes/user.routes.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);
app.use('/api/articles', ArticleRoutes);
app.use('/api/users/', UserRoutes);
app.use(errorhandler);

module.exports = app;