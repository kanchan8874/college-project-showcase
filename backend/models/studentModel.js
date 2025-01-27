const {model , Types, Schema}= require('../connection');

const mySchema=new Schema({

    name: { type: String },
    rollno: { type: String },
    batch: { type: String},
    course: { type: String },
    branch: {type: String},
    createdAt: { type: Date, default: Date.now }

});
module.exports = model('students', mySchema);
