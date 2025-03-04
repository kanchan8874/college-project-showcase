const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phoneno: { type: String },
    details: { type: String },
    createdAt: { type: Date, default: Date.now }

});

module.exports = model('contact', mySchema);