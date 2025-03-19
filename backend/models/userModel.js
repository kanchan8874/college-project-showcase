const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name: String,
    email: { type: String},
    password: { type: String, required: true, unique:true},
    avatar: { type: String },
    city: {type:String, default: 'Unknown'},
    createdAt: { type: Date, default: Date.now }
});

module.exports = model( 'users', mySchema);