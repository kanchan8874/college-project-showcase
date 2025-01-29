const { model, Schema, Types, } = require('../connection');

const mySchema = new Schema({
    project: { type: Types.ObjectId, ref: 'project' },
    name: { type: String, unique: true },
    video: { type: String },
    images: { type: Array },
    type: { type: String },
    createdAt:{type:Date, default:Date.now}

});

module.exports = model('project', mySchema);