const express = require('express');
const connectMongoDB = require('./config/db');
const cors = require('cors');
const todoRoutes = require('./routes/todo');
require('dotenv').config(); // Ensure this is at the top

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

console.log(`Environment MONGODB_URI: ${process.env.MONGODB_URI}`); // Debugging line to check URI

// Establish DB connection
connectMongoDB();

// CORS
app.use(cors({
    origin: [
        "http://localhost:3000"
    ],
    credentials: true
}));

// Routes
app.use('/api/todo', todoRoutes);

app.listen(PORT, () => {
    console.log(`Todo app server is listening on port ${PORT}`);
});
