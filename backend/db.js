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
const mongoURI = "mongodb://localhost:27017";

const connectToMongo = () => {
    mongoose.connect(mongoURI, { dbName: 'noteslify' }, () => {
        console.log("Connected To Mongo Successfully!!");
    })
};

module.exports = connectToMongo;