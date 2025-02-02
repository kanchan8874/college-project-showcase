const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    project: { type: Types.ObjectId, ref: 'project' },
    name: { type: String, unique: true },
    video: { type: String },
    images: { type: Array },
    branch: String,
    batch: Number,
    category: String,
    description: { type: String },
    student: { type: Types.ObjectId, ref: 'students' },
    type: { type: String },
    createdAt: { type: Date, default: Date.now }

});

module.exports = model('project', mySchema);