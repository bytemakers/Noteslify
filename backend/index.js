const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');

const load = async () => {
    const app = express();
    const PORT = process.env.PORT || 8181;
    
    app.use(express.json());
    app.use(cors());
    
    // Available Routes
    app.use('/api/auth', require('./routes/auth'));
    app.use('/api/notes', require('./routes/notes'));
    
    app.get('/', (req, res) => {
        res.send('Hi!');
    });
    
    app.listen(PORT, () => {
        console.log(`The App is running at http://localhost:${PORT}`);
    });

    await connectToMongo();
}

load()