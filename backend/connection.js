const mongoose = require('mongoose');

const url = "mongodb+srv://kanchankushwaha65520:iHXXBxuoG1Ap98Eg@cluster0.90xwd.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0";

// asynchroneous functions - returns promise
mongoose.connect(url)
    .then((result) => {
        console.log('database connected');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = mongoose;