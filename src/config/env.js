const requiredEnv = ['MONGO_URI', 'PORT', 'JWT_SECRET'];

const validateEnv = () => {
    requiredEnv.forEach((name) => {
        if (!process.env[name]) {
            console.error(`Error: Environment Variable ${name} is missing!`);
            process.exit(1);
        }
    });
    console.log("All environment variables are set.");
};

module.exports = validateEnv;