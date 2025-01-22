const { model, Schema, } = require('../connection');

const mySchema = new Schema({
    student: { type: Types.ObjectId, ref: 'student' },
    name: { type: String, unique: true },
    video: { type: String },
    images: { type: String },
    type: { type: String },
    createdAt:{type:Date, default:Date.now}

});

module.exports = model('project', mySchema);