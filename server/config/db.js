const mongoose = require('mongoose');
require('dotenv').config();

const connectString = process.env.MONGODB_URI;

const connectMongoDB = async () => {
    try {
        console.log(`MongoDB URI: ${connectString}`); // Debugging line to check URI
        await mongoose.connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to DB: ', error.message);
        process.exit(1);
    }
};

module.exports = connectMongoDB;
