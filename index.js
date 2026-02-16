require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./database/connectDB.js');
const logger = require('./middlewares/logger.js');
const errorhandler = require('./middlewares/errorHandler.js');

const ArticleRoutes = require('./routes/article.routes.js');
const UserRoutes = require('./routes/user.routes.js');

const app = express();

app.use(logger);
app.use(express.json());
app.use(cors());
app.use('/api/articles', ArticleRoutes);
app.use('/api/users/', UserRoutes);

connectDB();

app.use(errorhandler);

app.get('/', (req,res) => {
    res.send("Welcome to Blog API!");
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});