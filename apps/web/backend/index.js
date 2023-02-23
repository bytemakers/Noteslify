const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');
const handleError = require('./middleware/error');

const load = async () => {
    await connectToMongo();

    const app = express();
    const PORT = process.env.PORT || 8181;
    
    app.use(express.json());
    app.use(cors());

    
    // Available Routes
    app.use('/api/auth', require('./routes/auth'));
    app.use('/api/notes', require('./routes/notes'));
    app.use('/api/folders', require('./routes/folders'));
    
    app.get('/', (req, res) => {
        res.send('Hi!');
    });
    
    // Error handling middleware
    app.use(handleError);
    
    app.listen(PORT, () => {
        console.log(`The App is running at http://localhost:${PORT}`);
    });
}

load()