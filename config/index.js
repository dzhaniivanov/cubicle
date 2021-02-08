const config = {
    development: {
        PORT: 5000,
        SALT_ROUNDS:10,
    },
    production: {
        PORT: 80,
    },
};

module.exports=config[process.env.NODE_ENV.trim()];