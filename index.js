require('dotenv').config();
const validateEnv = require('./src/config/env.js');
const connectDB = require('./src/config/connectDB.js');
const app = require('./src/app.js');

validateEnv();

app.get('/', (req,res) => {
    res.send("Welcome to Blog API!");
});

const PORT = process.env.PORT;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();

