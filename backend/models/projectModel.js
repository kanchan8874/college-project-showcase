const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    name: { type: String, unique: false },
    video: { type: String },
    images: { type: Array },
    branch: String,
    batch: Number,
    category: String,
    description: { type: String },
    student: { type: Types.ObjectId, ref: 'students' },
    approved : { type: Boolean, default: false },
    type: { type: String },
    createdAt: { type: Date, default: Date.now }

});

module.exports = model('studentsproject', mySchema);