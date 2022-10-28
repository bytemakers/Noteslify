// const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://dbstring";

// const connectToMongo = () => {
//     mongoose.connect(mongoURI, { dbName: 'noteslify' }, (err) => {
//         console.log("Connected To Mongo Successfully!!");
//         console.log(err);
//     })
// }

// module.exports = connectToMongo;





const mongoose = require('mongoose');
if (process.env.DB == null) {
    mongoURI = "mongodb://127.0.0.1:27017";
} 
// Use this instead if running the dockerfile
else {
    mongoURI = "mongodb://mongodb:27017"
}


const connectToMongo = async (retryCount) => {
    const MAX_RETRIES = 3;
    const count = retryCount ?? 0;

    try {
        await mongoose.connect(mongoURI, { dbName: 'noteslify' });
        console.info('Connected To Mongo Successfully!!');

        return;
    } catch (error) {
        console.error(error);

        const nextRetryCount = count + 1;
        
        if (nextRetryCount >= MAX_RETRIES)
            throw new Error("Unable to connect to Mongo");

        console.info(`Retrying, retry count: ${nextRetryCount}`);
        
        return await connectToMongo(nextRetryCount)
    }
};

module.exports = connectToMongo;