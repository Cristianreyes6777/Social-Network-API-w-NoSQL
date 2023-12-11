const mongoose = require('mongoose');

// You might need to replace this with your actual MongoDB URI
const mongoURI = 'mongodb://localhost:27017/socialNetworkDB'; 

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose is disconnected from MongoDB');
});

// Export the connection
module.exports = mongoose.connection;
