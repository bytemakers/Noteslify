require("dotenv/config");
const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');

const load = async () => {
    await connectToMongo();

    const app = express();
    const PORT = process.env.PORT || 8181;
    
    const allowedOrigin =
      process.env.NODE_ENV === "production"
        ? "https://noteslify.vercel.app/"
        : "http://localhost:3000";
    app.use(express.json());
    app.use(
      cors({
        // Tried using an array and a function here but didn't work
        origin: allowedOrigin,
        optionsSuccessStatus: 200,
        credentials: true,
      })
    );
    
    // Available Routes
    app.use('/api/auth', require('./routes/auth'));
    app.use('/api/notes', require('./routes/notes'));
    
    app.get('/', (req, res) => {
        res.send('Hi!');
    });
    
    app.listen(PORT, () => {
        console.log(`The App is running at http://localhost:${PORT}`);
    });
}

load()