// const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://abhinandan__wadhwa:c8pvRZw55NhpZEpV@cluster0.rt1oy.mongodb.net/?retryWrites=true&w=majority";

// const connectToMongo = () => {
//     mongoose.connect(mongoURI, { dbName: 'petCare' }, (err) => {
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